# dgongut-web

Mi web personal: **[www.dgongut.com](https://www.dgongut.com)**. Una terminal con estética de monitor CRT, en español e inglés.

Es una sola página estática, sin frameworks ni compilación: HTML, CSS y JavaScript. La sirve un contenedor nginx ([linuxserver/nginx](https://docs.linuxserver.io/images/docker-nginx)).

## Estructura

```
www/                  lo que se publica (config/www del contenedor)
  index.html          estructura y estilos
  app.js              la terminal: contenido, comandos y efectos
  fonts/              JetBrains Mono (OFL), servida desde aquí, sin Google Fonts
  og.png              imagen de vista previa al compartir el enlace
  robots.txt, sitemap.xml
  es/, en/            redirecciones de las URLs de la web antigua
nginx/
  default.conf        server de nginx: proxies /api/*, 404 y caché
  security-headers.conf  CSP, HSTS y demás cabeceras
dev/
  devserver.py        servidor local que imita a nginx
  og.html, icon.html  plantillas de og.png y apple-touch-icon.png
docker-compose.yaml   contenedores de la web y de la página de donaciones
deploy.sh             despliegue en el servidor por Tailscale
```

## Editar el contenido

Todo está al principio de `www/app.js`:

| Qué | Dónde |
| --- | --- |
| Proyectos de `ls /Projects` | `PROJECTS` |
| Descripciones de `cat <proyecto>` | `ABOUT` |
| Redes de `ls /Social` | `SOCIAL` |
| Equipos de `neofetch` | `SETUP` |
| Textos, skills y `help` en ES/EN | `T.es` / `T.en` |

Lo demás se actualiza solo:
- **Pulls:** de Docker Hub, a través de `/api/dockerhub.json`, con caché de 10 minutos en nginx.
- **Estrellas, versiones y `git log`:** de la API de GitHub, desde el navegador.
- **Donantes:** del `donors.json` de los bots, a través de `/api/donors.json`.
- **Años de experiencia:** se calculan desde 2019.

## Estadísticas

Las visitas y los comandos se ven en [stats.dgongut.com/dgongut-web](https://stats.dgongut.com/dgongut-web), con el servicio de [telemetry](https://github.com/dgongut/telemetry) que usan los bots. El código está en `Stats` y `statsKey()` de `www/app.js`:
- Cada carga de la página cuenta una visita, con su idioma.
- Cada comando que escribe o pulsa el visitante suma uno (los de la animación de arranque no cuentan). Solo se envía qué comando era: los de `help` van con su nombre, `cat <proyecto>` por proyecto, los ocultos juntos como `cmd_secret` y lo que no existe como `cmd_unknown`.
- Los comandos se mandan al esconder o cerrar la pestaña, con `sendBeacon`.
- No se guarda nada en el navegador y todas las visitas usan el mismo `install_id`, así que no hace falta banner de cookies.
- Solo se envía desde www.dgongut.com: en local no sale nada.

Si añades un comando a `help`, añádelo también a `STATS_CMDS`, y su etiqueta a `projects/dgongut-web.yaml` en telemetry. Si no, cuenta como secreto. Un proyecto nuevo solo necesita su etiqueta `cat_` en ese manifiesto.

## Probar en local

```bash
python3 dev/devserver.py
```

Abre http://127.0.0.1:8765. El servidor local no envía las cabeceras de seguridad, así que la CSP se prueba en el servidor real.

## Desplegar

```bash
./deploy.sh --dry
```

```bash
./deploy.sh
```

`deploy.sh` hace una copia de seguridad en el servidor, sincroniza `www/` y la configuración de nginx, comprueba la configuración (`nginx -t`) y recarga nginx. Si la configuración no es válida, restaura la anterior.

## Seguridad

- La CSP solo permite scripts del propio dominio, sin scripts en línea. Si añades un script o un servicio externo, añade su dominio a `nginx/security-headers.conf`.
- Los datos que vienen de las APIs se limpian antes de mostrarse.
- El correo de `contact` se monta en el navegador y nunca aparece entero en el código.

## Comandos

`help`, `whoami`, `ls /Projects`, `cat <proyecto>`, `git log`, `ls /Social`, `cat skills.txt`, `neofetch`, `docker images`, `contact`, `donate`, `donors`, `theme amber|green|default`, `sound on|off`, `lang es|en`, `clear`… y algún secreto.
