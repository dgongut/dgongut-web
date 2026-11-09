"use strict";
// ---------- ASCII banner (ANSI Shadow) ----------
const L = {
  D: ["██████╗ ","██╔══██╗","██║  ██║","██║  ██║","██████╔╝","╚═════╝ "],
  G: [" ██████╗ ","██╔════╝ ","██║  ███╗","██║   ██║","╚██████╔╝"," ╚═════╝ "],
  O: [" ██████╗ ","██╔═══██╗","██║   ██║","██║   ██║","╚██████╔╝"," ╚═════╝ "],
  N: ["███╗   ██╗","████╗  ██║","██╔██╗ ██║","██║╚██╗██║","██║ ╚████║","╚═╝  ╚═══╝"],
  U: ["██╗   ██╗","██║   ██║","██║   ██║","██║   ██║","╚██████╔╝"," ╚═════╝ "],
  T: ["████████╗","╚══██╔══╝","   ██║   ","   ██║   ","   ██║   ","   ╚═╝   "],
};
document.getElementById('banner').textContent =
  [0,1,2,3,4,5].map(r => [..."DGONGUT"].map(c => L[c][r]).join("")).join("\n");

// ---------- Contenido (edita aquí) ----------
// Iconos: simple-icons (CC0)
const ICONS = {
  github: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  docker: "M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z",
  telegram: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
};
const SOCIAL = [
  ["GitHub", "https://github.com/dgongut", "github"],
  ["Docker Hub", "https://hub.docker.com/u/dgongut", "docker"],
  ["Telegram", "https://t.me/dgongut", "telegram"],
];
const DONATE_URL = "https://www.paypal.com/paypalme/dgonzalezgutierrez";
// Correo montado al vuelo: nunca aparece entero ni en el HTML ni en este código (anti-bots)
const MAIL = () => ["dgonz", "gut"].join("") + String.fromCharCode(64) + ["gmail", "com"].join(".");
const FOURFRAME_URL = "https://4frame.es";
// La etiqueta de cada proyecto se rellena sola: pulls de Docker Hub (repo con el
// mismo nombre) + estrellas y última release de GitHub. El tercer valor es solo
// el texto de respaldo si no hay datos.
const PROJECTS = [
  ["docker-controller-bot", "https://github.com/dgongut/docker-controller-bot", "+1M pulls"],
  ["malaga-cam-bot", "https://t.me/malaga_cam_bot", { es: "+300 usuarios/mes", en: "+300 users/month" }],
  ["torrent-controller-bot", "https://github.com/dgongut/torrent-controller-bot"],
  ["dropbot", "https://github.com/dgongut/dropbot"],
  ["wakebot", "https://github.com/dgongut/wakebot"],
  ["intrubot", "https://github.com/dgongut/intrubot"],
  ["whitelist-telegram-bot", "https://github.com/dgongut/whitelist-telegram-bot"],
  ["borgmatic-script", "https://github.com/dgongut/borgmatic-script"],
];
// Lo que muestra `cat <proyecto>`. install: comando para empezar a usarlo.
const ABOUT = {
  "docker-controller-bot": {
    es: ["Bot de Telegram para controlar los contenedores Docker de tu servidor desde el móvil:",
         "arrancar, parar, ver logs, actualizar imágenes y recibir avisos de cambios."],
    en: ["Telegram bot to control the Docker containers on your server from your phone:",
         "start, stop, read logs, update images and get notified about changes."],
    install: "docker pull dgongut/docker-controller-bot",
  },
  "malaga-cam-bot": {
    es: ["Bot de Telegram con las cámaras de tráfico y ciudad de Málaga en tiempo real."],
    en: ["Telegram bot with live traffic and city cameras from Málaga, Spain."],
    install: "t.me/malaga_cam_bot",
  },
  "torrent-controller-bot": {
    es: ["Controla tu cliente de torrents desde Telegram: añade, pausa y sigue tus descargas."],
    en: ["Control your torrent client from Telegram: add, pause and track your downloads."],
    install: "docker pull dgongut/torrent-controller-bot",
  },
  "dropbot": {
    es: ["Reenvía archivos a un bot de Telegram y se descargan directamente en tu servidor."],
    en: ["Forward files to a Telegram bot and they are downloaded straight to your server."],
    install: "docker pull dgongut/dropbot",
  },
  "wakebot": {
    es: ["Despierta los dispositivos de tu red local con Wake-on-LAN desde Telegram."],
    en: ["Wake up the devices on your local network with Wake-on-LAN from Telegram."],
    install: "docker pull dgongut/wakebot",
  },
  "intrubot": {
    es: ["Vigila quién se conecta a tu red y te avisa por Telegram de dispositivos nuevos."],
    en: ["Watches who joins your network and alerts you on Telegram about new devices."],
    install: "docker pull dgongut/intrubot",
  },
  "whitelist-telegram-bot": {
    es: ["Expulsa automáticamente de un grupo de Telegram a quien no esté en la lista blanca."],
    en: ["Automatically kicks anyone who is not on the whitelist out of a Telegram group."],
    install: "docker pull dgongut/whitelist-telegram-bot",
  },
  "borgmatic-script": {
    es: ["Scripts sencillos para automatizar copias de seguridad con Borgmatic."],
    en: ["Simple scripts to automate backups with Borgmatic."],
    install: "git clone https://github.com/dgongut/borgmatic-script",
  },
};
const SETUP = [
  ["jupiter", "Synology DS1821+ · 20GB RAM · ~112TB"],
  ["saturno", "Synology DS923+ · 20GB RAM · ~26TB"],
  ["ganimedes", "UnRAID · Intel N100 · 8GB RAM"],
  ["trappist", "VPS · Debian 13 · 3GB RAM"],
  ["macbook", "MacBook Pro M4 · 16GB · 512GB"],
];

// Años de experiencia: se calculan solos desde que empecé (2019)
const YEARS = Math.floor((Date.now() - new Date(2019, 0, 1)) / (365.25 * 864e5));

const T = {
  es: {
    intro: [
      "Hola, soy Daniel G.",
      "Ingeniero en Sistemas de Telecomunicación, dedicado al desarrollo de software.",
      "Hago bots de Telegram, automatizo cosas y tengo más NAS de los que debería.",
    ],
    skills: [
      `Desarrollo de software · +${YEARS} años · Java, Python, Bash, SQL, Docker, Git`,
      "IA · desarrollo asistido por IA y flujos de trabajo multiagente",
      "Sistemas · 7 NAS Synology, 5 Raspberry Pi, 1 UnRAID",
      "Audiovisual · cofundador de 4Frame · +7 cortometrajes",
    ],
    hint: "Toca o escribe:",
    other: "English",
    help: [
      ["whoami", "quién soy"],
      ["ls /Projects", "proyectos"],
      ["ls /Social", "redes"],
      ["cat skills.txt", "habilidades"],
      ["neofetch", "mi homelab"],
      ["cat <proyecto>", "detalles de un proyecto"],
      ["git log", "últimas releases"],
      ["docker images", "pulls en Docker Hub"],
      ["theme amber", "fósforo ámbar (green, default)"],
      ["sound on", "sonido de CRT y teclado (off)"],
      ["donate", "invítame a un café"],
      ["donors", "gracias a quienes me apoyan ❤"],
      ["contact", "escríbeme"],
      ["lang en", "switch to English"],
      ["clear", "limpiar"],
    ],
    helpTip: "↑/↓ historial · Tab autocompleta · …y hay algún secreto 👀",
    contact: ["¿Trabajo, colaboraciones o una idea? Escríbeme:"],
    contactBots: "Si es un fallo de algún bot, mejor abre un issue en su GitHub 🙏",
    notFound: p => `bash: cd: ${p}: No existe el archivo o el directorio`,
    donate: ["Si alguno de mis bots te ahorra tiempo, puedes invitarme a un café ☕", "Gracias de verdad, ayuda a mantener los proyectos vivos."],
    noHub: "Docker Hub no responde ahora mismo.",
    noGh: "GitHub no responde ahora mismo.",
    donorsHead: n => `❤ Gracias a las ${n} personas que han apoyado mis proyectos:`,
    donorsTail: "¿Quieres aparecer aquí? Escribe 'donate'.",
    donorsHint: n => `Ya me han apoyado ${n} personas, escribe`,
    noDonors: "No he podido cargar la lista ahora mismo.",
    noFile: f => `cat: ${f}: No existe el archivo. Prueba con un nombre de 'ls /Projects'.`,
    projTip: "toca un proyecto para ver qué hace",
    themeOk: t => `tema: ${t}`,
    themeBad: "uso: theme amber | green | default",
    soundOn: "sonido activado 🔊 (sube el volumen)", soundOff: "sonido desactivado 🔇",
    soundBad: "uso: sound on | off",
    matrixExit: "(pulsa cualquier tecla o toca para salir)",
    rebooting: "Reiniciando en 3… 2… 1…",
    powerOn: "toca o pulsa una tecla para encender",
    notfound: c => `comando no encontrado: ${c}. Prueba 'help'.`,
    rights: "Todos los derechos reservados.",
  },
  en: {
    intro: [
      "Hi, I'm Daniel G.",
      "Telecommunication Systems Engineer, working in software development.",
      "I build Telegram bots, automate things and own more NAS boxes than I should.",
    ],
    skills: [
      `Software development · ${YEARS}+ years · Java, Python, Bash, SQL, Docker, Git`,
      "AI · AI-assisted development and multi-agent workflows",
      "Systems · 7 Synology NAS, 5 Raspberry Pi, 1 UnRAID",
      "Video · 4Frame co-founder · 7+ short films",
    ],
    hint: "Tap or type:",
    other: "Español",
    help: [
      ["whoami", "who I am"],
      ["ls /Projects", "projects"],
      ["ls /Social", "links"],
      ["cat skills.txt", "skills"],
      ["neofetch", "my homelab"],
      ["cat <project>", "project details"],
      ["git log", "latest releases"],
      ["docker images", "Docker Hub pulls"],
      ["theme amber", "amber phosphor (green, default)"],
      ["sound on", "CRT and keyboard sound (off)"],
      ["donate", "buy me a coffee"],
      ["donors", "thanks to my supporters ❤"],
      ["contact", "get in touch"],
      ["lang es", "cambiar a español"],
      ["clear", "clear screen"],
    ],
    helpTip: "↑/↓ history · Tab completes · …and there may be a secret or two 👀",
    contact: ["Work, collaborations or an idea? Drop me a line:"],
    contactBots: "If it's a bug in one of the bots, please open an issue on its GitHub 🙏",
    notFound: p => `bash: cd: ${p}: No such file or directory`,
    donate: ["If any of my bots saves you time, you can buy me a coffee ☕", "Thank you, it really helps keep the projects alive."],
    noHub: "Docker Hub is not responding right now.",
    noGh: "GitHub is not responding right now.",
    donorsHead: n => `❤ Thanks to the ${n} people who have supported my projects:`,
    donorsTail: "Want to be here? Type 'donate'.",
    donorsHint: n => `${n} people have already supported me, type`,
    noDonors: "Couldn't load the list right now.",
    noFile: f => `cat: ${f}: No such file. Try a name from 'ls /Projects'.`,
    projTip: "tap a project to see what it does",
    themeOk: t => `theme: ${t}`,
    themeBad: "usage: theme amber | green | default",
    soundOn: "sound on 🔊 (turn the volume up)", soundOff: "sound off 🔇",
    soundBad: "usage: sound on | off",
    matrixExit: "(press any key or tap to exit)",
    rebooting: "Rebooting in 3… 2… 1…",
    powerOn: "tap or press a key to power on",
    notfound: c => `command not found: ${c}. Try 'help'.`,
    rights: "All rights reserved.",
  },
};
const CHIPS = ["help", "ls /Projects", "git log", "cat skills.txt", "contact", "theme amber", "donate"];

// ---------- Motor de terminal ----------
let lang = (new URLSearchParams(location.search).get("lang")
  || (navigator.language || "es").slice(0,2)) === "en" ? "en" : "es";
const term = document.getElementById("term");
const input = document.getElementById("input");
const inputLine = document.getElementById("input-line");
const inputTs = document.getElementById("input-ts");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = matchMedia("(hover: hover)").matches;
const sleep = ms => new Promise(r => setTimeout(r, reduce ? 0 : ms));
const now = () => new Date().toLocaleTimeString("es-ES", { hour12: false });
const esc = s => s.replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
const scroll = () => window.scrollTo(0, document.body.scrollHeight);
const runBtn = (cmd, label = cmd) => `<button type="button" class="run" data-cmd="${esc(cmd)}">${esc(label)}</button>`;

function promptLine() {
  const d = document.createElement("div");
  d.className = "line";
  d.innerHTML = `<span class="ts">${now()}</span><span class="ps">&gt;&gt;</span><span class="cmd"></span>`;
  term.appendChild(d);
  return d.querySelector(".cmd");
}
// Cada arranque de la intro tiene un número; si cambia (p. ej. cambio de idioma
// a mitad de la animación) la escritura en curso se aborta.
let gen = 0, booted = false, busy = false;
class Cancelled extends Error {}
const check = g => { if (g !== gen) throw new Cancelled(); };
async function type(text, speed = 35) {
  const g = gen;
  const el = promptLine();
  const cur = document.createElement("span"); cur.className = "cursor";
  el.after(cur);
  try {
    for (const ch of text) { el.textContent += ch; if (ch !== " ") Sound.click(); await sleep(speed + Math.random() * 30); check(g); }
  } finally { cur.remove(); }
}
function out(html, cls = "out") {
  const d = document.createElement("div");
  d.className = "line " + cls; d.innerHTML = html;
  term.appendChild(d); scroll();
}
const safeUrl = u => /^https:\/\//.test(String(u)) ? esc(String(u)) : "#";
const link = (name, url) => `<a href="${safeUrl(url)}" target="_blank" rel="noopener">${esc(String(name))}</a>`;

// ---------- Datos en vivo ----------
// Docker Hub (vía proxy nginx /api/dockerhub.json, Docker Hub no permite CORS)
const fmtNum = v => { const n = Number(v) || 0; return (n >= 1e6 ? (n / 1e6).toFixed(n >= 1e7 ? 0 : 1) + "M"
  : n >= 1e3 ? Math.round(n / 1e3) + "k" : String(n)).replace(".", lang === "es" ? "," : "."); };
const pullsReady = fetch("/api/dockerhub.json")
  .then(r => r.ok ? r.json() : null)
  .then(d => Object.fromEntries((d?.results || []).filter(r => /^[a-z0-9._-]+$/.test(r.name)).map(r => [r.name, Number(r.pull_count) || 0])))
  .catch(() => ({}));

// GitHub (CORS abierto; se guarda 1h en la sesión para no gastar el límite de la API)
const ghRepo = url => (url.match(/github\.com\/dgongut\/([^/]+)/) || [])[1];
const ghReady = (async () => {
  try {
    const c = JSON.parse(sessionStorage.getItem("gh-v2") || "null");
    if (c && Date.now() - c.t < 36e5) return c.d;
  } catch {}
  const d = {};
  try {
    const r = await fetch("https://api.github.com/users/dgongut/repos?per_page=100");
    if (r.ok) (await r.json()).forEach(x => { d[x.name] = { stars: x.stargazers_count, pushed: x.pushed_at }; });
    await Promise.all(PROJECTS.map(([, u]) => ghRepo(u)).filter(n => n && d[n]).map(async n => {
      const r = await fetch(`https://api.github.com/repos/dgongut/${n}/releases/latest`);
      if (r.ok) { const j = await r.json(); d[n].ver = j.tag_name; d[n].date = j.published_at; d[n].rel = j.html_url; }
    }));
    if (Object.keys(d).length) try { sessionStorage.setItem("gh-v2", JSON.stringify({ t: Date.now(), d })); } catch {}
  } catch {}
  return d;
})();
// Donantes: el mismo donors.json que usan los bots (nginx lo lee de dgongut-donate-web)
let DONORS = null;
const donorsReady = fetch("/api/donors.json")
  .then(r => r.ok ? r.json() : [])
  .then(d => Array.isArray(d) ? d.filter(x => typeof x === "string" && x.trim()).map(x => x.trim().slice(0, 80)) : [])
  .catch(() => [])
  .then(d => (DONORS = d));
let PULLS = {}, GH = {};
const loadLive = () => Promise.all([
  pullsReady.then(p => { PULLS = p; }),
  ghReady.then(g => { GH = g; }),
]);

function projectTag(name, url, fallback) {
  const parts = [];
  if (PULLS[name]) parts.push(`${fmtNum(PULLS[name])} pulls`);
  else if (fallback) parts.push(esc(typeof fallback === "object" ? fallback[lang] : fallback));
  const gh = GH[ghRepo(url)];
  if (gh?.stars) parts.push(`<b>★ ${fmtNum(gh.stars)}</b>`);
  if (gh?.ver) parts.push(esc(String(gh.ver)));
  return parts.join(" · ");
}

// ---------- Sonido (Web Audio, sin archivos; apagado por defecto) ----------
const Sound = {
  ctx: null, on: false, hum: null, noise: null,
  init() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    if (!this.ctx) {
      this.ctx = new AC();
      const len = this.ctx.sampleRate * 0.05, b = this.ctx.createBuffer(1, len, this.ctx.sampleRate), d = b.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
      this.noise = b;
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
    return true;
  },
  set(on) {
    try { localStorage.setItem("snd", on ? "1" : "0"); } catch {}
    if (on) { if (!this.init()) return; this.on = true; this.thump(); this.humOn(); }
    else { this.on = false; this.humOff(); }
    updateSndBtn();
  },
  humOn() {
    if (!this.on || this.hum) return;
    const c = this.ctx, t = c.currentTime, g = c.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(1, t + 1.2); g.connect(c.destination);
    const o = c.createOscillator(); o.type = "sawtooth"; o.frequency.value = 50;
    const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 160;
    const og = c.createGain(); og.gain.value = 0.02;
    o.connect(lp).connect(og).connect(g);
    const w = c.createOscillator(); w.frequency.value = 15734;   // pitido del transformador de un CRT
    const wg = c.createGain(); wg.gain.value = 0.0025; w.connect(wg).connect(g);
    o.start(); w.start();
    this.hum = { g, o, w };
  },
  humOff() {
    if (!this.hum) return;
    const { g, o, w } = this.hum, t = this.ctx.currentTime;
    g.gain.cancelScheduledValues(t); g.gain.setValueAtTime(g.gain.value, t); g.gain.linearRampToValueAtTime(0, t + .25);
    o.stop(t + .3); w.stop(t + .3); this.hum = null;
  },
  click(big = false) {
    if (!this.on || !this.ctx) return;
    const c = this.ctx, t = c.currentTime, s = c.createBufferSource(); s.buffer = this.noise;
    const f = c.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = (big ? 900 : 1700) + Math.random() * 900; f.Q.value = 1.2;
    const g = c.createGain(); g.gain.setValueAtTime(big ? .5 : .32, t); g.gain.exponentialRampToValueAtTime(.001, t + (big ? .06 : .035));
    s.connect(f).connect(g).connect(c.destination); s.start(t);
  },
  thump() {
    if (!this.on || !this.ctx) return;
    const c = this.ctx, t = c.currentTime, o = c.createOscillator(), g = c.createGain();
    o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(35, t + .3);
    g.gain.setValueAtTime(.35, t); g.gain.exponentialRampToValueAtTime(.001, t + .35);
    o.connect(g).connect(c.destination); o.start(t); o.stop(t + .4);
  },
};
function updateSndBtn() {
  const b = document.querySelector(".hint .snd");
  if (b) { b.textContent = Sound.on ? "🔊" : "🔇"; b.title = Sound.on ? "sound off" : "sound on"; }
}
// Si el visitante lo dejó activado, se reactiva con su primera interacción (los navegadores lo exigen)
let sndPref = false; try { sndPref = localStorage.getItem("snd") === "1"; } catch {}
if (sndPref) {
  const wake = e => { if (e.target.closest?.(".snd")) return; removeEventListener("pointerdown", wake, true); removeEventListener("keydown", wake, true); if (!Sound.on) Sound.set(true); };
  addEventListener("pointerdown", wake, true); addEventListener("keydown", wake, true);
}

// ---------- Temas ----------
function applyTheme(t, save = true) {
  if (t === "default") delete document.body.dataset.theme; else document.body.dataset.theme = t;
  if (save) try { localStorage.setItem("theme", t); } catch {}
}
try { const t = localStorage.getItem("theme"); if (t === "amber" || t === "green") applyTheme(t, false); } catch {}

const ago = iso => {
  const s = (new Date(iso) - Date.now()) / 1000, rtf = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });
  for (const [u, n] of [["year", 31536e3], ["month", 2592e3], ["week", 604800], ["day", 86400], ["hour", 3600], ["minute", 60]])
    if (Math.abs(s) >= n) return rtf.format(Math.round(s / n), u);
  return rtf.format(0, "minute");
};

// ---------- Easter eggs ----------
function onAnyKeyOrTap(fn) {
  const h = e => { e.preventDefault(); removeEventListener("keydown", h, true); removeEventListener("pointerdown", h, true); fn(); };
  setTimeout(() => { addEventListener("keydown", h, true); addEventListener("pointerdown", h, true); }, 350);
}
function matrix() {
  out(`<span class="muted">${T[lang].matrixExit}</span>`);
  const c = document.createElement("canvas"); c.className = "fx"; document.body.appendChild(c);
  const x = c.getContext("2d"), fs = 16, mColor = getComputedStyle(document.body).getPropertyValue("--cmd").trim() || "#4ade80";
  const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789DGONGUT";
  let w, h, drops;
  const resize = () => { w = c.width = innerWidth; h = c.height = innerHeight; drops = Array.from({ length: Math.ceil(w / fs) }, () => Math.random() * -60); };
  resize(); addEventListener("resize", resize);
  const id = setInterval(() => {
    x.fillStyle = "rgba(5,8,5,.09)"; x.fillRect(0, 0, w, h);
    x.font = `${fs}px "JetBrains Mono", monospace`;
    drops.forEach((y, i) => {
      x.fillStyle = Math.random() > .96 ? "#ffffff" : mColor;
      x.fillText(chars[Math.random() * chars.length | 0], i * fs, y * fs);
      drops[i] = y * fs > h && Math.random() > .975 ? 0 : y + 1;
    });
  }, 45);
  onAnyKeyOrTap(() => { clearInterval(id); removeEventListener("resize", resize); c.remove(); busy = false; focusInput(); });
  return true; // mantiene busy hasta salir
}
async function rmrf() {
  const victims = ["/bin", "/boot", "/etc/nginx", "/var/lib/docker", "/home/dgongut/bots", "/volume1/fotos 😱", "/volume1/backups 😱😱"];
  for (const v of victims) { out(`<span class="warn">removed '${esc(v)}'</span>`); await sleep(170); }
  await sleep(400);
  const fx = document.createElement("div"); fx.className = "fx panic";
  fx.innerHTML = `<span class="warn">Kernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0)</span>` + esc(
`CPU: 0 PID: 1 Comm: swapper/0 Not tainted 6.12.0-dgongut #1
Hardware name: TRAPPIST VPS, BIOS 1.16.3
Call Trace:
 <TASK>
 dump_stack_lvl+0x48/0x60
 panic+0x118/0x2f0
 mount_block_root+0x1d3/0x27e
 prepare_namespace+0x136/0x165
 kernel_init_freeable+0x25c/0x286
 kernel_init+0x1a/0x130
 </TASK>
---[ end Kernel panic - not syncing ]---

${T[lang].rebooting}`);
  document.body.appendChild(fx);
  await sleep(3800);
  fx.remove();
  restart();
}
function shutdown() {
  Sound.thump(); Sound.humOff();
  document.body.classList.add("off");
  setTimeout(() => {
    const fx = document.createElement("div"); fx.className = "fx dark";
    fx.innerHTML = `<span>${esc(T[lang].powerOn)}</span>`;
    document.body.appendChild(fx);
    onAnyKeyOrTap(() => { fx.remove(); document.body.classList.remove("off"); Sound.thump(); Sound.humOn(); busy = false; focusInput(); });
  }, reduce ? 0 : 560);
  return true;
}
function restart() {
  document.body.classList.remove("booted");
  inputLine.classList.remove("on");
  const els = [document.querySelector("main"), document.querySelector("footer")];
  els.forEach(e => { e.style.animation = "none"; void e.offsetWidth; e.style.animation = ""; });
  busy = false;
  boot();
}

// ---------- Más easter eggs (comandos ocultos) ----------
const tr = (es, en) => lang === "es" ? es : en;
const T0 = Date.now();
const muted = s => out(`<span class="muted">${esc(s)}</span>`);

const FORTUNES = [
  ["Funciona en mi máquina. Por eso metí la máquina en un contenedor.", "It works on my machine. So I shipped the machine in a container."],
  ["Hay 10 tipos de personas: las que entienden binario y las que no.", "There are 10 kinds of people: those who understand binary and those who don't."],
  ["Un backup que nunca has restaurado es solo una esperanza comprimida.", "A backup you've never restored is just compressed hope."],
  ["No es DNS. No puede ser DNS. Era DNS.", "It's not DNS. There's no way it's DNS. It was DNS."],
  ["Los bots no duermen. Yo tampoco cuando uno falla a las 3 de la mañana.", "Bots never sleep. Neither do I when one breaks at 3 a.m."],
  ["git commit -m \"arreglo final\" · git commit -m \"ahora sí\" · git commit -m \"por favor\"", "git commit -m \"final fix\" · git commit -m \"really final\" · git commit -m \"please\""],
  ["Las dos cosas más difíciles en informática: invalidar cachés, poner nombres y los errores por uno.", "The two hardest things in computing: cache invalidation, naming things and off-by-one errors."],
  ["Si funciona, no lo toques. Si no funciona, reinicia el contenedor.", "If it works, don't touch it. If it doesn't, restart the container."],
  ["El homelab nunca está terminado. Solo está en la versión de hoy.", "A homelab is never finished. It's just at today's version."],
];

function cowsay(text) {
  const t = (text || tr("¡Instala docker-controller-bot!", "Install docker-controller-bot!")).slice(0, 48);
  out(esc(` ${"_".repeat(t.length + 2)}\n< ${t} >\n ${"-".repeat(t.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`));
}

async function sl() {
  const art = ["      o  O  o", "     ____    ║", " ___|_[]_|___║___", "|    DGONGUT     |>", "'-(O)--(O)--(O)--'"];
  const w = Math.max(...art.map(l => l.length)), pad = art.map(l => l.padEnd(w));
  const el = document.createElement("div"); el.className = "line out"; term.appendChild(el);
  const probe = document.createElement("span"); probe.textContent = "M".repeat(20); el.appendChild(probe);
  const cols = Math.max(20, Math.floor(term.clientWidth / (probe.getBoundingClientRect().width / 20 || 8)) - 1);
  for (let x = cols, f = 0; x > -w; x -= 2, f++) {
    const lines = pad.map((l, i) => {
      if (i === 0) l = (f >> 1) % 2 ? "      O  o  O".padEnd(w) : l;
      return (x >= 0 ? " ".repeat(x) + l : l.slice(-x)).slice(0, cols);
    });
    el.textContent = lines.join("\n");
    if (f % 3 === 0) Sound.click(true);
    scroll();
    await sleep(28);
    if (reduce) break;
  }
  el.remove();
  muted(tr("🚂 chu chu… (querías escribir 'ls')", "🚂 choo choo… (you meant 'ls')"));
}

async function ping(host) {
  const h = host || "dgongut.com";
  if (!/^[a-z0-9.-]{1,60}$/.test(h)) return muted(`ping: ${h}: ${tr("Nombre o servicio desconocido", "Name or service not known")}`);
  const local = /^(localhost|127\.0\.0\.1)$/.test(h);
  out(`PING ${esc(h)}: 56 data bytes`);
  const times = [];
  for (let i = 0; i < 4; i++) {
    await sleep(i ? 700 : 300);
    const t = local ? 0.04 + Math.random() * 0.03 : 9 + Math.random() * 14;
    times.push(t);
    out(`64 bytes from ${esc(h)}: icmp_seq=${i} ttl=${local ? 64 : 57} time=${t.toFixed(local ? 3 : 1)} ms`);
  }
  muted(`--- ${h} ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss\nrtt min/avg/max = ${[Math.min(...times), times.reduce((a, b) => a + b) / 4, Math.max(...times)].map(v => v.toFixed(local ? 3 : 1)).join("/")} ms`);
}

function degauss() {
  Sound.thump();
  document.body.classList.remove("degauss"); void document.body.offsetWidth;
  document.body.classList.add("degauss");
  setTimeout(() => document.body.classList.remove("degauss"), 1200);
}

// Código Konami: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI = "arrowup arrowup arrowdown arrowdown arrowleft arrowright arrowleft arrowright b a";
let keyBuf = [];
addEventListener("keydown", e => {
  keyBuf = [...keyBuf, (e.key || "").toLowerCase()].slice(-10);
  if (keyBuf.join(" ") !== KONAMI || !booted || busy) return;
  keyBuf = [];
  setTimeout(() => {
    input.value = "";
    out(`<span class="hl">🎮 ↑ ↑ ↓ ↓ ← → ← → B A</span>`);
    muted(tr("+30 vidas. Monitor desmagnetizado.", "+30 lives. Monitor degaussed."));
    degauss();
  });
});

function gitCmd(sub, arg) {
  if (sub === "status") return muted(tr(
    "En la rama main\nTu rama está actualizada con 'origin/main'.\n\nnada para hacer commit, el árbol de trabajo está limpio",
    "On branch main\nYour branch is up to date with 'origin/main'.\n\nnothing to commit, working tree clean"));
  if (sub === "push" && /(^|\s)(-f|--force)(\s|$)/.test(arg)) {
    const fri = new Date().getDay() === 5;
    return out(`<span class="warn">${esc(tr(fri ? "¿push --force un viernes? Ni de broma. 🙅" : "push --force… espero que sepas lo que haces. 😬",
      fri ? "push --force on a Friday? No way. 🙅" : "push --force… hope you know what you're doing. 😬"))}</span>`);
  }
  if (sub === "push") return muted("Everything up-to-date");
  if (sub === "pull") return muted(tr("Ya está actualizado.", "Already up to date."));
  if (sub === "blame") return muted(tr("La culpa es de dgongut. Siempre.", "It was dgongut. It's always dgongut."));
  muted(tr(`git: '${sub || ""}' no es un comando de git. Prueba 'git log'.`, `git: '${sub || ""}' is not a git command. Try 'git log'.`));
}

function cd(arg) {
  const a = arg.replace(/\/$/, "");
  if (!a || a === "~" || a === "/home/dgongut" || a === ".") return;
  if (a === "..") return muted(tr("Más arriba no hay nada interesante. 😄", "Nothing interesting up there. 😄"));
  if (/^\/?projects$/.test(a)) return COMMANDS["ls /projects"]();
  if (/^\/?social$/.test(a)) return COMMANDS["ls /social"]();
  out(`<span class="warn">${esc(T[lang].notFound(a))}</span>`);
}

const EDITORS = {
  vim: ["Has entrado en vim. Llevas 0 segundos intentando salir… Pista: escribe :q", "You're in vim now. 0 seconds trying to get out so far… Hint: type :q"],
  emacs: ["emacs: un gran sistema operativo, solo le falta un buen editor. 😏", "emacs: a great operating system, lacking only a decent editor. 😏"],
  nano: ["nano: la opción sensata. Pero aquí no hay nada que editar. 😄", "nano: the sensible choice. But there's nothing to edit here. 😄"],
};

// ---------- Comandos ----------
const COMMANDS = {
  whoami: () => T[lang].intro.forEach(l => out(esc(l))),
  "ls /projects": () => {
    PROJECTS.forEach(([n, u, t]) => {
      const tag = projectTag(n, u, t);
      out(`<button type="button" class="proj" data-cmd="cat ${esc(n)}">${esc(n)}</button>${tag ? `<span class="tag">${tag}</span>` : ""}`, "item");
    });
    out(`<span class="muted">↳ ${esc(T[lang].projTip)}</span>`);
  },
  "git log": () => {
    const rows = PROJECTS.map(([n, u]) => [n, GH[ghRepo(u)]]).filter(([, g]) => g?.date)
      .sort((a, b) => new Date(b[1].date) - new Date(a[1].date));
    if (!rows.length) return out(`<span class="muted">${T[lang].noGh}</span>`);
    rows.forEach(([n, g]) => out(
      `<span class="ts">*</span> ${link(g.ver, g.rel)} <span class="hl">${esc(n)}</span> <span class="muted">· ${esc(ago(g.date))}</span>`));
  },
  "ls /social": () => SOCIAL.forEach(([n, u, i]) => out(
    `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[i]}"/></svg>${link(n, u)}`, "item")),
  "cat skills.txt": () => T[lang].skills.forEach(s => out(esc(s).replace("4Frame", link("4Frame", FOURFRAME_URL)))),
  contact: () => {
    T[lang].contact.forEach(l => out(esc(l)));
    const m = MAIL();
    out(`✉ <a href="mailto:${m}">${m}</a>`);
    out(`<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS.telegram}"/></svg>${link("t.me/dgongut", "https://t.me/dgongut")}`, "item");
    out(`<span class="muted">${esc(T[lang].contactBots)}</span>`);
  },
  neofetch: () => SETUP.forEach(([h, d]) =>
    out(`<span class="hl">${h.padEnd(10)}</span> <span class="muted">${esc(d)}</span>`)),
  "docker images": () => {
    const rows = Object.entries(PULLS).sort((a, b) => b[1] - a[1]);
    if (!rows.length) return out(`<span class="muted">${T[lang].noHub}</span>`);
    out(`<span class="muted">${"REPOSITORY".padEnd(37)}PULLS</span>`);
    rows.forEach(([n, p]) => out(`${link("dgongut/" + n, "https://hub.docker.com/r/dgongut/" + encodeURIComponent(n))}${" ".repeat(Math.max(1, 37 - 8 - n.length))}<span class="hl">${fmtNum(p)}</span>`));
    out(`<span class="muted">${"TOTAL".padEnd(37)}</span><span class="cmd">${fmtNum(rows.reduce((s, [, p]) => s + p, 0))}</span>`);
  },
  donate: () => {
    T[lang].donate.forEach(l => out(esc(l)));
    out(`☕ ${link("paypal.me/dgonzalezgutierrez", DONATE_URL)}`);
    if (DONORS?.length) out(`<span class="muted">${esc(T[lang].donorsHint(DONORS.length))}</span> ${runBtn("donors")}`);
  },
  donors: () => {
    if (!DONORS?.length) return out(`<span class="muted">${T[lang].noDonors}</span>`);
    out(`<span class="hl">${esc(T[lang].donorsHead(DONORS.length))}</span>`);
    out(DONORS.map(n => `<span class="donor">${esc(n)}</span>`).join(`<span class="muted"> · </span>`));
    out(`<span class="muted">${esc(T[lang].donorsTail)}</span>`);
  },
  help: () => {
    T[lang].help.forEach(([c, d]) => out(`${c.includes("<") ? `<span class="cmd">${esc(c.padEnd(15))}</span>` : runBtn(c, c.padEnd(15))} <span class="muted">${esc(d)}</span>`));
    out(`<span class="muted">${esc(T[lang].helpTip)}</span>`);
  },
  clear: () => { term.innerHTML = ""; },
  "lang es": () => setLang("es"),
  "lang en": () => setLang("en"),
  ls: () => out(`<span class="hl">Projects/  Social/  skills.txt</span>`),
  pwd: () => out("/home/dgongut"),
  date: () => out(new Date().toLocaleString(lang === "es" ? "es-ES" : "en-GB")),
  matrix,
  exit: shutdown,
  logout: shutdown,
  // ocultos
  "uname -a": () => out("Linux trappist 6.12.0-dgongut #1 SMP PREEMPT_DYNAMIC Debian 6.12 x86_64 GNU/Linux"),
  uptime: () => {
    const s = Math.floor((Date.now() - T0) / 1000), mm = String(Math.floor(s / 60)).padStart(2, "0"), ss = String(s % 60).padStart(2, "0");
    out(`${now()} up ${mm}:${ss}, 1 user, load average: ☕ ☕ ☕`);
    muted(tr(`(y programando: +${YEARS} años)`, `(and coding: ${YEARS}+ years)`));
  },
  history: () => cmdHistory.forEach((c, i) => out(`<span class="muted">${String(i + 1).padStart(4)}</span>  ${esc(c)}`)),
  fortune: () => { const f = FORTUNES[Math.random() * FORTUNES.length | 0]; out(`<span class="hl">${esc(f[lang === "es" ? 0 : 1])}</span>`); },
  sl,
  "docker ps": () => {
    out(`<span class="muted">${"IMAGE".padEnd(38)}STATUS</span>`);
    PROJECTS.filter(([n]) => n !== "borgmatic-script").forEach(([n], i) =>
      out(`${esc(("dgongut/" + n).padEnd(38))}<span class="hl">Up ${[3, 2, 5, 7, 4, 2, 6][i % 7]} ${tr("semanas", "weeks")} (healthy)</span>`));
  },
  htop: () => {
    out(`<span class="muted">  PID USER      CPU%  MEM%  COMMAND</span>`);
    [[1, "dgongut", 87.0, 12.3, tr("café", "coffee")], [42, "root", 4.2, 1.1, "docker-controller-bot"],
     [128, "root", 2.7, 0.9, "malaga-cam-bot"], [256, "root", 1.9, 0.8, "torrent-controller-bot"],
     [512, "root", 0.4, 0.3, "borgmatic --stats"], [1337, "dgongut", 0.1, 0.0, tr("procrastinar --quiet", "procrastinate --quiet")]]
      .forEach(([p, u, c, m, n]) => out(`${String(p).padStart(5)} ${u.padEnd(9)} ${c.toFixed(1).padStart(5)} ${m.toFixed(1).padStart(5)}  <span class="hl">${esc(n)}</span>`));
  },
  who: () => {
    out(`dgongut  pts/0  ${new Date(T0).toLocaleTimeString("es-ES", { hour12: false })}`);
    out(`${tr("tú", "you").padEnd(8)} pts/1  ${tr("ahora mismo 👀", "right now 👀")}`);
  },
  "ls -la": () => [["drwxr-xr-x", "dgongut", "."], ["drwxr-xr-x", "root   ", ".."], ["-rw-------", "dgongut", ".secretos"],
    ["drwxr-xr-x", "dgongut", "Projects/"], ["drwxr-xr-x", "dgongut", "Social/"], ["-rw-r--r--", "dgongut", "skills.txt"]]
    .forEach(([p, u, n]) => out(`<span class="muted">${p}  ${u}</span>  ${n.startsWith(".") ? esc(n) : `<span class="hl">${esc(n)}</span>`}`)),
  "cat .secretos": () => {
    muted(tr("Pistas, no soluciones:", "Hints, not answers:"));
    tr(["· hay un tren que pasa si te equivocas al escribir 'ls'", "· una vaca que habla", "· galletas de la fortuna", "· un editor del que nadie sabe salir", "· un código de los 80: ↑ ↑ ↓ ↓ ← → ← → B A", "· y un comando que nunca deberías ejecutar como root"],
      ["· a train that passes when you mistype 'ls'", "· a talking cow", "· fortune cookies", "· an editor nobody knows how to quit", "· an 80s code: ↑ ↑ ↓ ↓ ← → ← → B A", "· and a command you should never run as root"]).forEach(l => out(esc(l)));
  },
  ":q": () => muted(tr("Has salido de vim. Eres de los pocos. 🏆", "You quit vim. One of the few. 🏆")),
  coffee: () => {
    out(`<span class="warn">HTTP 418 I'm a teapot</span>`);
    out(`${esc(tr("Esta terminal no hace café, pero puedes invitarme a uno:", "This terminal can't brew coffee, but you can buy me one:"))} ${runBtn("donate")}`);
  },
  hola: () => out(esc(tr("¡Hola! 👋 Escribe 'help' para ver qué puedes hacer… o busca los secretos. 😉", "Hi! 👋 Type 'help' to see what you can do… or hunt for the secrets. 😉"))),
  "42": () => out(esc(tr("La respuesta a la vida, el universo y todo lo demás. Ahora falta la pregunta.", "The answer to life, the universe and everything. Now we need the question."))),
  reboot: () => { restart(); return true; },
  degauss,
  "make me a sandwich": () => muted(tr("¿Qué? Háztelo tú.", "What? Make it yourself.")),
  "sudo make me a sandwich": () => muted(tr("Vale.", "Okay.")),
};
const ALIASES = { "cat donors.txt": "donors", "ls /donors": "donors", thanks: "donors", gracias: "donors", "ls /projects/": "ls /projects", "ls /social/": "ls /social", projects: "ls /projects", social: "ls /social", skills: "cat skills.txt",
  uname: "uname -a", top: "htop", "ls -a": "ls -la", "ls -al": "ls -la", ll: "ls -la", "cat .secrets": "cat .secretos",
  ":q!": ":q", ":wq": ":q", ":x": ":q", ":qa!": ":q", "café": "coffee", cafe: "coffee", "make coffee": "coffee", "brew coffee": "coffee",
  hello: "hola", hi: "hola", hey: "hola", "buenas": "hola", shutdown: "exit", poweroff: "exit", "sudo reboot": "reboot", "sudo shutdown": "exit" };
const COMPLETIONS = [...new Set([...T.es.help.map(([c]) => c).filter(c => !c.includes("<")), "lang es", "matrix", "exit",
  "theme green", "theme default", "sound off", "cat donors.txt", ...PROJECTS.map(([n]) => "cat " + n)])];
const isRmRf = c => /^(sudo\s+)?rm\s+-(rf|fr)\s+(\/|\/\*|~)\s*$/.test(c);

function catProject(name) {
  const n = name.replace(/^\/?projects\//, "").replace(/\/$/, "");
  const p = PROJECTS.find(([k]) => k === n), a = ABOUT[n];
  if (!p || !a) return out(`<span class="muted">${esc(T[lang].noFile(name))}</span>`);
  const [, url, fb] = p, tag = projectTag(n, url, fb);
  out(`<span class="hl">${esc(n)}</span>${tag ? ` <span class="muted">${tag.replace(/<b>/g, '<b class="star">')}</span>` : ""}`);
  a[lang].forEach(l => out(esc(l)));
  out(`<span class="muted">$</span> <span class="cmd">${esc(a.install)}</span>`);
  out(`↗ ${link(url.replace("https://", ""), url)}`);
}

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  const hint = document.getElementById("hint");
  hint.innerHTML = `<span>${esc(T[l].hint)}</span><span class="chips">${CHIPS.map(c =>
    `<button type="button" class="chip" data-cmd="${esc(c)}">${esc(c)}</button>`).join("")}</span><span>·</span>` +
    `<button type="button" class="swap">${T[l].other}</button><span>·</span><button type="button" class="snd" aria-label="sound"></button>`;
  hint.querySelector(".swap").onclick = () => {
    const other = l === "es" ? "en" : "es";
    if (booted) run(`lang ${other}`, true);
    else { lang = other; boot(); }   // aún escribiendo la intro: se reinicia en el otro idioma
  };
  hint.querySelector(".snd").onclick = () => Sound.set(!Sound.on);
  updateSndBtn();
  document.title = l === "es" ? "Daniel G - Ingeniero de Telecomunicación · Desarrollo de software" : "Daniel G - Telecom Engineer · Software Developer";
  document.getElementById("footer").textContent = `Daniel G · ${new Date().getFullYear()} · ${T[l].rights}`;
}

async function run(raw, animated = false) {
  if (busy) return;
  busy = true;
  let keepBusy = false;
  try {
    const cmd = raw.trim();
    if (animated) await type(cmd, 20); else promptLine().textContent = cmd;
    if (!cmd) return;
    const key = cmd.toLowerCase().replace(/\s+/g, " ");
    if (isRmRf(key)) { keepBusy = true; await rmrf(); return; }
    const fn = COMMANDS[ALIASES[key] || key];
    if (fn) {
      const r = fn();
      if (r instanceof Promise) await r; else keepBusy = r === true;
      return;
    }
    if (key.startsWith("sudo ")) { out(`<span class="muted">${lang === "es" ? "buen intento 😏" : "nice try 😏"}</span>`); return; }
    const [verb, ...rest] = key.split(" "), arg = rest.join(" ");
    const rawArg = cmd.replace(/^\S+\s*/, "");   // argumento con mayúsculas originales
    if (verb === "cat" && arg) { catProject(arg); return; }
    if (verb === "echo") { out(esc(rawArg.slice(0, 200))); return; }
    if (verb === "cowsay") { cowsay(rawArg); return; }
    if (verb === "ping") { await ping(rest[0]); return; }
    if (verb === "git") { gitCmd(rest[0], rest.slice(1).join(" ")); return; }
    if (verb === "cd") { cd(arg); return; }
    if (verb === "vi" || verb === "vim" || verb === "nvim") { muted(EDITORS.vim[lang === "es" ? 0 : 1]); return; }
    if (EDITORS[verb]) { muted(EDITORS[verb][lang === "es" ? 0 : 1]); return; }
    if (verb === "man") { muted(arg ? tr(`No hay entrada de manual para ${arg}. Prueba 'help'.`, `No manual entry for ${arg}. Try 'help'.`) : tr("¿Qué página del manual desea?", "What manual page do you want?")); return; }
    if (verb === "ssh") { out(`<span class="warn">${esc(`${arg || "trappist"}: Permission denied (publickey).`)}</span> 🔐`); return; }
    if (["apt", "apt-get", "brew", "pip", "npm"].includes(verb)) { out(`<span class="warn">${esc(tr("E: No se pudo abrir el fichero de bloqueo «/var/lib/dpkg/lock-frontend» - open (13: Permiso denegado). ¿Eres root?", "E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied). Are you root?"))}</span>`); return; }
    if (verb === "rm") { out(`<span class="warn">${esc(tr(`rm: no se puede borrar '${rest.at(-1) || ""}': Sistema de ficheros de solo lectura`, `rm: cannot remove '${rest.at(-1) || ""}': Read-only file system`))}</span>`); return; }
    if (verb === "theme") {
      if (["amber", "green", "default"].includes(arg)) { applyTheme(arg); out(`<span class="muted">${esc(T[lang].themeOk(arg))}</span>`); }
      else out(`<span class="muted">${T[lang].themeBad}</span>`);
      return;
    }
    if (verb === "sound") {
      if (arg === "on" || arg === "off") { Sound.set(arg === "on"); out(`<span class="muted">${T[lang][arg === "on" ? "soundOn" : "soundOff"]}</span>`); }
      else out(`<span class="muted">${T[lang].soundBad}</span>`);
      return;
    }
    out(`<span class="muted">${esc(T[lang].notfound(cmd))}</span>`);
  } catch (e) {
    if (!(e instanceof Cancelled)) throw e;
  } finally {
    if (!keepBusy) busy = false;
    scroll();
  }
}

// ---------- Entrada: historial, Tab, comandos pulsables ----------
const cmdHistory = []; let hIdx = 0;
function focusInput() { if (booted && canHover) input.focus({ preventScroll: true }); }
input.addEventListener("keydown", e => {
  if (e.key.length === 1 || e.key === "Backspace") Sound.click();
  if (e.key === "Enter") {
    Sound.click(true);
    const v = input.value;
    if (v.trim() && cmdHistory[cmdHistory.length - 1] !== v) cmdHistory.push(v);
    hIdx = cmdHistory.length;
    input.value = "";
    inputTs.textContent = now();
    run(v);
  } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    if (!cmdHistory.length) return;
    e.preventDefault();
    hIdx = Math.max(0, Math.min(cmdHistory.length, hIdx + (e.key === "ArrowUp" ? -1 : 1)));
    input.value = cmdHistory[hIdx] ?? "";
    setTimeout(() => input.setSelectionRange(input.value.length, input.value.length));
  } else if (e.key === "Tab") {
    e.preventDefault();
    const v = input.value.toLowerCase();
    if (!v) return;
    const m = COMPLETIONS.filter(c => c.toLowerCase().startsWith(v));
    if (m.length === 1) input.value = m[0];
    else if (m.length > 1) {
      let p = m[0];
      for (const c of m) while (!c.toLowerCase().startsWith(p.toLowerCase())) p = p.slice(0, -1);
      if (p.length > v.length) input.value = p;
      else { promptLine().textContent = input.value; out(`<span class="muted">${m.map(esc).join("   ")}</span>`); }
    }
  } else if (e.key.toLowerCase() === "l" && e.ctrlKey) {
    e.preventDefault(); term.innerHTML = "";
  }
});
document.addEventListener("click", e => {
  const b = e.target.closest("button[data-cmd]");
  if (b) {
    if (!booted) return;
    if (b.dataset.cmd !== "clear") cmdHistory.push(b.dataset.cmd), hIdx = cmdHistory.length;
    run(b.dataset.cmd, true).then(focusInput);
    return;
  }
  if (!e.target.closest("a, button") && !getSelection().toString()) focusInput();
});

// ---------- Arranque ----------
// nginx sirve esta misma página (con código 404) para rutas que no existen
const MISSING_PATH = !["/", "/index.html"].includes(location.pathname)
  ? (() => { try { return decodeURIComponent(location.pathname); } catch { return location.pathname; } })().slice(0, 80)
  : null;
async function boot() {
  const g = ++gen;
  booted = false;
  term.innerHTML = "";
  setLang(lang);
  if (MISSING_PATH) out(`<span class="warn">${esc(T[lang].notFound(MISSING_PATH))}</span>`, "line");
  try {
    for (const l of T[lang].intro) { await type(l); await sleep(250); check(g); }
    await type(""); await sleep(300); check(g);
    await run("ls /Social", true); await sleep(400); check(g);
    await Promise.race([loadLive(), sleep(3000)]); check(g);
    await run("ls /Projects", true); await sleep(300); check(g);
  } catch (e) {
    if (e instanceof Cancelled) return;
    throw e;
  }
  booted = true;
  loadLive();
  document.body.classList.add("booted");
  inputTs.textContent = now();
  inputLine.classList.add("on");
  focusInput();
  scroll();
}
setInterval(() => { inputTs.textContent = now(); }, 1000);
boot();
