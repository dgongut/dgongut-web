"""Servidor local de pruebas. Uso, desde la raíz del repo:  python3 dev/devserver.py

Sirve www/ en http://127.0.0.1:8765 e imita lo que hace nginx en trappist:
  - /api/dockerhub.json, /api/donors.json y /api/telemetry.json (proxies)
  - rutas inexistentes -> index.html con código 404
No envía las cabeceras de seguridad (CSP, etc.): pruébalas en el servidor real.
"""
import functools
import http.server
import os
import urllib.request

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "www")
PROXY = {
    "/api/dockerhub.json": "https://hub.docker.com/v2/repositories/dgongut/?page_size=100",
    "/api/donors.json": "https://www.dgongut.com/api/donors.json",
    "/api/telemetry.json": "https://telemetry.dgongut.com/v1/projects",
}


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        path = self.path.split("?", 1)[0]
        if path in PROXY:
            data = urllib.request.urlopen(PROXY[path], timeout=10).read()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(data)
            return
        if not os.path.exists(self.translate_path(path)):
            with open(os.path.join(ROOT, "index.html"), "rb") as f:
                body = f.read()
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()


if __name__ == "__main__":
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 8765), functools.partial(Handler, directory=ROOT))
    print("http://127.0.0.1:8765")
    server.serve_forever()
