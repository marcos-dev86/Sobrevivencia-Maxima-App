// Gera ícone, ícone adaptativo (Android), splash e favicon a partir do sprite "idle" do jogador.
// Uso: node tools/make-icons.mjs   (requer playwright + `npx playwright install chromium`)
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const pw = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const A = path.join(root, 'assets');
const hero = 'data:image/png;base64,' + fs.readFileSync(path.join(A, 'costumes', '5c2a0cd9cdd75a2d98386b68b529cea2.png')).toString('base64');
const font = fs.readFileSync(path.join(A, 'fonts', 'Griffy-Regular.ttf')).toString('base64');

const browser = await pw.chromium.launch();
const page = await browser.newPage();
async function render(inner, bg, size, out, style = '') {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(
    `<style>@font-face{font-family:Curly;src:url(data:font/ttf;base64,${font})}</style>` +
      `<body style="margin:0;width:100vw;height:100vh;background:${bg};display:flex;align-items:center;justify-content:center;overflow:hidden;${style}">${inner}</body>`,
  );
  await page.waitForTimeout(250);
  await page.screenshot({ path: path.join(A, out), omitBackground: true });
}
const img = (pct, extra = '') => `<img src="${hero}" style="height:${pct}%;${extra}">`;
await render(img(80), '#ffffff', 1024, 'icon.png');
await render(img(54), 'transparent', 1024, 'android-icon-foreground.png');
await render(img(54, 'filter:brightness(0)'), 'transparent', 1024, 'android-icon-monochrome.png');
await render('', '#ffffff', 1024, 'android-icon-background.png');
await render(img(80), '#ffffff', 48, 'favicon.png');
await render(
  `<div style="display:flex;flex-direction:column;align-items:center;gap:30px"><img src="${hero}" style="height:520px"><div style="font:96px Curly;color:#fff;white-space:nowrap">Sobrevivência Máxima</div></div>`,
  'transparent',
  1600,
  'splash-icon.png',
);
await browser.close();
console.log('ícones gerados');
