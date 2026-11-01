// Gera TODOS os assets do app a partir do projeto Scratch original (original/Sobrevivencia_Maxima.sb3):
//
//  1. descompacta o .sb3;
//  2. normaliza cada SVG com o MESMO código que o Scratch usa (scratch-svg-renderer);
//  3. roda tools/transpile.mjs (blocos do Scratch -> TypeScript);
//  4. rasteriza cada fantasia para PNG (assets/costumes) numa resolução boa para telas de celular
//     e calcula a máscara de colisão (1 bit/pixel, comprimida) + casco convexo -> src/game/costumes.json;
//  5. converte os sons para MP3 (assets/sounds) e copia as fontes do Scratch usadas na interface;
//  6. escreve src/game/assetMap.ts com os require() estáticos que o Metro precisa.
//
// Uso:  npm run assets      (precisa de ffmpeg, unzip e `npm i` das devDependencies: playwright, scratch-svg-renderer,
//                            scratch-render-fonts; depois `npx playwright install chromium` uma vez)
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const sb3 = path.join(root, 'original', 'Sobrevivencia_Maxima.sb3');
const tmp = path.join(root, '.tmp-sb3');
const A = path.join(root, 'assets');

/** procura um pacote em node_modules local ou em TOOLS_NM (pasta extra, opcional) */
const dep = (name, sub = '') => {
  for (const base of [path.join(root, 'node_modules'), process.env.TOOLS_NM].filter(Boolean)) {
    const p = path.join(base, name, sub);
    if (fs.existsSync(p)) return p;
  }
  throw new Error(`pacote ausente: ${name} (rode npm install)`);
};
const pw = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

fs.rmSync(tmp, { recursive: true, force: true });
fs.mkdirSync(tmp, { recursive: true });
try {
  execFileSync('unzip', ['-o', '-q', sb3, '-d', tmp]);
} catch {
  execFileSync('tar', ['-xf', sb3, '-C', tmp]);
}
for (const d of ['costumes', 'sounds', 'fonts']) {
  fs.rmSync(path.join(A, d), { recursive: true, force: true });
  fs.mkdirSync(path.join(A, d), { recursive: true });
}
const project = JSON.parse(fs.readFileSync(path.join(tmp, 'project.json'), 'utf8'));
fs.copyFileSync(path.join(tmp, 'project.json'), path.join(root, 'original', 'project.json'));

// ------------------------------------------------------------------ fontes
const fontsDir = dep('scratch-render-fonts', 'src');
const fontMap = {
  'Sans Serif': 'NotoSans-Medium.ttf',
  Serif: 'SourceSerifPro-Regular.otf',
  Handwriting: 'handlee-regular.ttf',
  Marker: 'Knewave.ttf',
  Curly: 'Griffy-Regular.ttf',
  Pixel: 'Grand9K-Pixel.ttf',
  Scratch: 'Scratch.ttf',
};
const fontB64 = {};
for (const [fam, file] of Object.entries(fontMap)) fontB64[fam] = fs.readFileSync(path.join(fontsDir, file)).toString('base64');
// só estas duas aparecem em texto desenhado pelo app (o resto já vai "assado" nos PNGs)
const uiFonts = { Curly: fontMap.Curly, 'Sans Serif': fontMap['Sans Serif'] };
for (const f of Object.values(uiFonts)) fs.copyFileSync(path.join(fontsDir, f), path.join(A, 'fonts', f));

// ------------------------------------------------------------- navegador
const rendererJs = fs.readFileSync(dep('scratch-svg-renderer', 'dist/web/scratch-svg-renderer.js'), 'utf8');
const browser = await pw.chromium.launch();
const page = await browser.newPage();
await page.setContent('<html><body></body></html>');
await page.addScriptTag({ content: rendererJs });

const costumes = new Map(); // md5ext -> def do scratch
for (const t of project.targets) for (const c of t.costumes) costumes.set(c.md5ext, c);

// ------------------------------------------------------- A) normalizar SVGs
const metrics = {};
const normalized = new Map(); // md5ext -> svg string
for (const [md5ext, c] of costumes) {
  const src = path.join(tmp, md5ext);
  if (c.dataFormat === 'svg') {
    const raw = fs.readFileSync(src, 'utf8');
    const r = await page.evaluate((s) => {
      const R = window.ScratchSVGRenderer;
      const tag = R.loadSvgString(s, false);
      const v = tag.viewBox.baseVal;
      return { x: v.x, y: v.y, w: v.width, h: v.height, svg: R.serializeSvgToString(tag, false) };
    }, raw);
    normalized.set(md5ext, r.svg);
    metrics[md5ext] = { x: r.x, y: r.y, w: r.w, h: r.h };
  } else {
    const buf = fs.readFileSync(src);
    metrics[md5ext] = { x: 0, y: 0, w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  }
}
fs.writeFileSync(path.join(root, 'src', 'game', 'costume-metrics.json'), JSON.stringify({ metrics }, null, 1));

// ------------------------------------------------------ B) transpilar scripts
execFileSync(process.execPath, [path.join(root, 'tools', 'transpile.mjs')], { stdio: 'inherit' });
const gen = fs.readFileSync(path.join(root, 'src', 'game', 'project.generated.ts'), 'utf8');
const targets = JSON.parse(gen.slice(gen.indexOf('= [') + 2, gen.indexOf('] as TargetDef[]') + 1));

// escala de rasterização por fantasia (sprites exibidos em escala grande precisam de mais pixels)
const DISPLAY_BASE = 2.5; // px por unidade do palco (a tela do celular tem ~2-3 px/unidade)
const MAX_PX = 1000;
const scaleOf = new Map();
for (const t of targets) {
  const s = Math.max(1, Math.max(t.size, t.maxSize ?? 0) / 100);
  for (const c of t.costumes) scaleOf.set(c.file, Math.max(scaleOf.get(c.file) ?? 0, Math.min(8, DISPLAY_BASE * s)));
}

// ----------------------------------------------- C) rasterizar + máscara + casco
function hullOf(mask, mw, mh, kx, ky) {
  const stride = (mw + 7) >> 3;
  const pts = [];
  for (let y = 0; y < mh; y++) {
    let l = -1;
    let r = -1;
    for (let x = 0; x < mw; x++) {
      if (mask[y * stride + (x >> 3)] & (0x80 >> (x & 7))) {
        if (l < 0) l = x;
        r = x;
      }
    }
    if (l >= 0) {
      pts.push([l / kx, y / ky], [(r + 1) / kx, (y + 1) / ky], [l / kx, (y + 1) / ky], [(r + 1) / kx, y / ky]);
    }
  }
  if (!pts.length) return [];
  pts.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lower = [];
  for (const p of pts) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop();
    lower.push(p);
  }
  const upper = [];
  for (let i = pts.length - 1; i >= 0; i--) {
    const p = pts[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop();
    upper.push(p);
  }
  lower.pop();
  upper.pop();
  return lower.concat(upper).map(([a, b]) => [Math.round(a * 1000) / 1000, Math.round(b * 1000) / 1000]);
}

const out = {};
const imgs = {};
let totalPx = 0;
for (const [md5ext, c] of costumes) {
  const m = metrics[md5ext];
  const isSvg = c.dataFormat === 'svg';
  const width = isSvg ? m.w : m.w / (c.bitmapResolution || 1);
  const height = isSvg ? m.h : m.h / (c.bitmapResolution || 1);
  const png = fs.existsSync(path.join(tmp, md5ext)) && !isSvg ? fs.readFileSync(path.join(tmp, md5ext)).toString('base64') : null;
  if (m.w <= 0 || m.h <= 0) {
    out[md5ext] = { iw: 0, ih: 0, mw: 0, mh: 0, hull: [], mask: '' };
    continue;
  }
  let want = isSvg ? scaleOf.get(md5ext) ?? DISPLAY_BASE : 1;
  if (isSvg) want = Math.min(want, MAX_PX / Math.max(m.w, m.h));
  const r = await page.evaluate(
    async ({ svg, png, w, h, want, fonts }) => {
      const mk = (cw, ch) => {
        const cv = document.createElement('canvas');
        cv.width = Math.max(1, cw);
        cv.height = Math.max(1, ch);
        return cv;
      };
      const load = (src) =>
        new Promise((res, rej) => {
          const im = new Image();
          im.onload = () => res(im);
          im.onerror = () => rej(new Error('falha ao decodificar'));
          im.src = src;
        });
      let src;
      if (svg) {
        const need = new Set([...svg.matchAll(/font-family="([^"]*)"/g)].map((x) => x[1]));
        let s = svg;
        if (need.size) {
          let style = '<defs><style>';
          for (const f of need)
            if (fonts[f])
              style += `@font-face {font-family: "${f}";src: url("data:application/x-font-ttf;charset=utf-8;base64,${fonts[f]}");}`;
          style += '</style></defs>';
          s = svg.replace(/<svg[^>]*>/, `$&${style}`);
        }
        src = URL.createObjectURL(new Blob([s], { type: 'image/svg+xml;charset=utf-8' }));
      } else src = 'data:image/png;base64,' + png;
      const im = await load(src);
      // imagem de desenho
      const iw = svg ? Math.ceil(w * want) : im.naturalWidth;
      const ih = svg ? Math.ceil(h * want) : im.naturalHeight;
      const dc = mk(iw, ih);
      dc.getContext('2d').drawImage(im, 0, 0, iw, ih);
      // máscara (2 px por unidade para SVG, resolução nativa para PNG)
      const mw = svg ? Math.ceil(w * 2) : im.naturalWidth;
      const mh = svg ? Math.ceil(h * 2) : im.naturalHeight;
      let mc = dc;
      if (svg && (mw !== iw || mh !== ih)) {
        mc = mk(mw, mh);
        mc.getContext('2d').drawImage(im, 0, 0, mw, mh);
      }
      const data = mc.getContext('2d').getImageData(0, 0, mw, mh).data;
      const stride = (mw + 7) >> 3;
      const bits = new Uint8Array(stride * mh);
      for (let y = 0; y < mh; y++)
        for (let x = 0; x < mw; x++) if (data[(y * mw + x) * 4 + 3] > 0) bits[y * stride + (x >> 3)] |= 0x80 >> (x & 7);
      let bs = '';
      for (let i = 0; i < bits.length; i += 0x8000) bs += String.fromCharCode(...bits.subarray(i, i + 0x8000));
      return { iw, ih, mw, mh, bits: btoa(bs), png: dc.toDataURL('image/png').split(',')[1] };
    },
    { svg: isSvg ? normalized.get(md5ext) : null, png, w: m.w, h: m.h, want, fonts: fontB64 },
  );
  const bits = Buffer.from(r.bits, 'base64');
  const kx = r.mw / width;
  const ky = r.mh / height;
  out[md5ext] = {
    iw: r.iw,
    ih: r.ih,
    mw: r.mw,
    mh: r.mh,
    hull: hullOf(bits, r.mw, r.mh, kx, ky),
    mask: zlib.deflateSync(bits, { level: 9 }).toString('base64'),
  };
  totalPx += r.iw * r.ih;
  const pngName = md5ext.replace(/\.[a-z0-9]+$/, '') + '.png';
  fs.writeFileSync(path.join(A, 'costumes', pngName), Buffer.from(r.png, 'base64'));
  imgs[md5ext] = pngName;
}
await browser.close();
fs.writeFileSync(path.join(root, 'src', 'game', 'costumes.json'), JSON.stringify(out));

// ----------------------------------------------------------------- sons
const sounds = new Map();
for (const t of project.targets) for (const s of t.sounds) sounds.set(s.md5ext, s);
const soundOut = {};
for (const [md5ext, s] of sounds) {
  const src = path.join(tmp, md5ext);
  const name = md5ext.replace(/\.[a-z0-9]+$/, '') + '.mp3';
  if (s.dataFormat === 'mp3') fs.copyFileSync(src, path.join(A, 'sounds', name));
  else
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', src, '-codec:a', 'libmp3lame', '-q:a', '3', path.join(A, 'sounds', name)]);
  soundOut[md5ext] = name;
}

// ------------------------------------------------------------ assetMap.ts
const lines = [];
lines.push('// GERADO por tools/build-assets.mjs — não edite à mão.');
lines.push('/* eslint-disable */');
lines.push('// require() estáticos: o Metro precisa enxergar cada arquivo para empacotá-lo no app.');
lines.push('export const costumeImages: Record<string, any> = {');
for (const [k, v] of Object.entries(imgs)) lines.push(`  ${JSON.stringify(k)}: require('../../assets/costumes/${v}'),`);
lines.push('};');
lines.push('export const soundFiles: Record<string, any> = {');
for (const [k, v] of Object.entries(soundOut)) lines.push(`  ${JSON.stringify(k)}: require('../../assets/sounds/${v}'),`);
lines.push('};');
lines.push('export const uiFonts: Record<string, any> = {');
for (const [fam, f] of Object.entries(uiFonts)) lines.push(`  ${JSON.stringify(fam)}: require('../../assets/fonts/${f}'),`);
lines.push('};');
fs.writeFileSync(path.join(root, 'src', 'game', 'assetMap.ts'), lines.join('\n') + '\n');

fs.rmSync(tmp, { recursive: true, force: true });
const sz = (d) =>
  (fs.readdirSync(path.join(A, d)).reduce((a, f) => a + fs.statSync(path.join(A, d, f)).size, 0) / 1048576).toFixed(1);
console.log(
  `OK: ${costumes.size} fantasias (${(totalPx / 1e6).toFixed(1)} Mpx, PNG ${sz('costumes')} MB), ${sounds.size} sons (${sz('sounds')} MB)`,
);
