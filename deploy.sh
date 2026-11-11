#!/usr/bin/env bash
# Despliega la web en trappist (por Tailscale).
#   ./deploy.sh          -> copia de seguridad + sube www/ y la config de nginx + recarga nginx
#   ./deploy.sh --dry    -> solo enseña qué cambiaría
set -euo pipefail

HOST="${DEPLOY_HOST:-trappist}"
DIR="docker/dgongut-web"
cd "$(dirname "$0")"

DRY=""
[[ "${1:-}" == "--dry" ]] && DRY="--dry-run"

if [[ -z "$DRY" ]]; then
  echo "» Copia de seguridad en $HOST:~/$DIR/backups"
  ssh "$HOST" "cd ~/$DIR && mkdir -p backups && tar czf backups/www-and-nginx-\$(date +%Y%m%d-%H%M%S).tar.gz config/www config/nginx/site-confs/default.conf config/nginx/security-headers.conf"
fi

# lastmod del sitemap: fecha del último commit que tocó www/ (o hoy, si hay cambios sin commit en www/)
LASTMOD="$(git log -1 --format=%cs -- www 2>/dev/null || true)"
if [[ -z "$LASTMOD" || -n "$(git status --porcelain -- www 2>/dev/null)" ]]; then LASTMOD="$(date +%F)"; fi
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
sed "s#<lastmod>[^<]*</lastmod>#<lastmod>$LASTMOD</lastmod>#" www/sitemap.xml > "$TMP/sitemap.xml"

echo "» Subiendo www/ (sitemap con lastmod $LASTMOD)"
rsync -rlcv --delete $DRY --exclude '.DS_Store' --exclude '/sitemap.xml' www/ "$HOST:$DIR/config/www/"
rsync -cv --chmod=F644 $DRY "$TMP/sitemap.xml" "$HOST:$DIR/config/www/sitemap.xml"

echo "» Subiendo config de nginx"
rsync -cv $DRY nginx/security-headers.conf "$HOST:$DIR/config/nginx/security-headers.conf.new"
rsync -cv $DRY nginx/default.conf "$HOST:$DIR/config/nginx/site-confs/default.conf.new"
[[ -n "$DRY" ]] && exit 0

echo "» Probando y recargando nginx (vuelve atrás solo si la config falla)"
ssh "$HOST" bash -s <<EOF
set -e
cd ~/$DIR/config/nginx
cp security-headers.conf security-headers.conf.prev
cp site-confs/default.conf site-confs/default.conf.prev
mv security-headers.conf.new security-headers.conf
mv site-confs/default.conf.new site-confs/default.conf
if docker exec dgongut-web nginx -t; then
  docker exec dgongut-web nginx -s reload
  echo "OK: nginx recargado"
else
  mv security-headers.conf.prev security-headers.conf
  mv site-confs/default.conf.prev site-confs/default.conf
  echo "ERROR: la config de nginx no es válida, se ha restaurado la anterior" >&2
  exit 1
fi
EOF
echo "» Listo: https://www.dgongut.com"
