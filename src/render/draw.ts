import {
  ClipOp,
  FilterMode,
  MipmapMode,
  PaintStyle,
  Skia,
  type SkCanvas,
  type SkFont,
  type SkImage,
  type SkPicture,
  type SkRect,
} from '@shopify/react-native-skia';
import { EXTRA_ACHIEVEMENTS, TOAST_MS, getToast, unlocked, type ExtraId } from '../game/extras';
import { records, run } from '../game/records';
import { CELL, hash } from '../game/world';
import type { Runtime } from '../engine/runtime';
import type { Target } from '../engine/target';
import { STAGE_H, STAGE_W, type CostumeData } from '../engine/types';
import { uiFont } from '../platform/native';
import { applyEffects } from './effects';
import { SPAWN_KIND, SPAWN_MS, SpawnPainter, spawnMods, type Box, type SpawnKind, type SpawnMods } from './spawnFx';

type Align = 'left' | 'center' | 'right';
const STRETCH = new Set(['screen color']);

export class Renderer {
  private recorder = Skia.PictureRecorder();
  private paint = Skia.Paint();
  private tp = Skia.Paint();
  private spawn = new SpawnPainter();
  private rects = new WeakMap<CostumeData, { src: SkRect; dst: SkRect }>();

  constructor() {
    this.paint.setAntiAlias(true);
    this.tp.setAntiAlias(true);
  }

  /** Desenha um quadro completo (palco 480x360 centralizado, letterbox preto) e devolve a imagem gravada. */
  render(rt: Runtime, W: number, H: number): SkPicture {
    // Tela cheia: a altura do palco (360) preenche a altura da tela e a largura visível (viewW) preenche o resto.
    const VW = rt.viewW;
    const k = Math.min(W / VW, H / STAGE_H);
    const ox = (W - VW * k) / 2;
    const oy = (H - STAGE_H * k) / 2;
    const c = this.recorder.beginRecording(Skia.XYWHRect(0, 0, W, H));
    c.drawColor(Skia.Color('#000000'));
    c.save();
    c.translate(ox, oy);
    c.scale(k, k);
    c.clipRect(Skia.XYWHRect(0, 0, VW, STAGE_H), ClipOp.Intersect, true);
    this.rect(c, 0, 0, VW, STAGE_H, '#ffffff', 1);
    if (rt.loaded) {
      if (rt.stage.costume?.def.name === 'game' && rt.sprite('player')?.visible) this.drawFloor(c, rt);
      for (const t of rt.order) {
        if (!t.isStage && !t.visible) continue;
        this.drawTarget(c, rt, t);
      }
      for (const t of rt.order) if (!t.isStage && t.visible && t.bubble) this.drawBubble(c, rt, t);
      this.drawMonitors(c, rt);
      this.drawOverlays(c, rt);
    }
    c.restore();
    return this.recorder.finishRecordingAsPicture();
  }

  // ------------------------------------------------------------ primitivas
  private rect(c: SkCanvas, x: number, y: number, w: number, h: number, css: string, a: number) {
    const p = this.tp;
    p.setStyle(PaintStyle.Fill);
    p.setColor(Skia.Color(css));
    p.setAlphaf(a);
    c.drawRect(Skia.XYWHRect(x, y, w, h), p);
  }
  private rrect(c: SkCanvas, x: number, y: number, w: number, h: number, r: number, css: string, stroke?: string, sw = 1) {
    const p = this.tp;
    const rr = Skia.RRectXY(Skia.XYWHRect(x, y, w, h), r, r);
    p.setStyle(PaintStyle.Fill);
    p.setColor(Skia.Color(css));
    p.setAlphaf(1);
    c.drawRRect(rr, p);
    if (stroke) {
      p.setStyle(PaintStyle.Stroke);
      p.setStrokeWidth(sw);
      p.setColor(Skia.Color(stroke));
      c.drawRRect(rr, p);
    }
  }
  private text(c: SkCanvas, s: string, x: number, y: number, font: SkFont, css: string, align: Align = 'left', base: 'middle' | 'top' = 'middle') {
    const size = font.getSize();
    let dx = 0;
    if (align !== 'left') {
      const w = font.measureText(s).width;
      dx = align === 'center' ? -w / 2 : -w;
    }
    const by = base === 'middle' ? y + size * 0.35 : y + size * 0.82;
    const p = this.tp;
    p.setStyle(PaintStyle.Fill);
    p.setColor(Skia.Color(css));
    p.setAlphaf(1);
    c.drawText(s, x + dx, by, p, font);
  }

  // ----------------------------------------------------------------- chão
  /**
   * Chão do mundo: BRANCO, com uma textura bem leve (pontinhos, riscos e pedrinhas bem claros)
   * que rola junto com a câmera para o jogador perceber que está andando.
   * Também marca de leve as divisas entre os 9 chunks.
   */
  private drawFloor(c: SkCanvas, rt: Runtime) {
    const cam = rt.cam;
    const VW = rt.viewW;
    const left = cam.x - VW / 2;
    const top = cam.y + STAGE_H / 2;
    const c0 = Math.floor(left / CELL) - 1;
    const c1 = Math.floor((left + VW) / CELL) + 1;
    const r0 = Math.floor((top - STAGE_H) / CELL) - 1;
    const r1 = Math.floor(top / CELL) + 1;
    const p = this.tp;
    for (let cx = c0; cx <= c1; cx++) {
      for (let cy = r0; cy <= r1; cy++) {
        const n = hash(cx, cy);
        if (n >= 0.78) continue;
        const X = cx * CELL + hash(cx, cy, 1) * CELL - left;
        const Y = top - (cy * CELL + hash(cx, cy, 2) * CELL);
        p.setColor(Skia.Color('#28283c'));
        if (n < 0.45) {
          p.setStyle(PaintStyle.Fill);
          p.setAlphaf(0.055);
          c.drawCircle(X, Y, 1.4 + hash(cx, cy, 3) * 0.9, p);
        } else if (n < 0.7) {
          const a = hash(cx, cy, 4) * Math.PI;
          const l = 3 + hash(cx, cy, 5) * 4;
          p.setStyle(PaintStyle.Stroke);
          p.setStrokeWidth(1.2);
          p.setAlphaf(0.055);
          c.drawLine(X - Math.cos(a) * l, Y - Math.sin(a) * l, X + Math.cos(a) * l, Y + Math.sin(a) * l, p);
        } else {
          const rx = 3 + hash(cx, cy, 6) * 2;
          const ry = 2 + hash(cx, cy, 7);
          p.setStyle(PaintStyle.Fill);
          p.setAlphaf(0.035);
          c.save();
          c.translate(X, Y);
          c.rotate((hash(cx, cy, 8) * 3 * 180) / Math.PI, 0, 0);
          c.drawOval(Skia.XYWHRect(-rx, -ry, rx * 2, ry * 2), p);
          c.restore();
        }
      }
    }
    // divisas dos chunks (tracejadas, bem discretas)
    const W = rt.world.w;
    const H = rt.world.h;
    p.setColor(Skia.Color('#28283c'));
    p.setStyle(PaintStyle.Stroke);
    p.setStrokeWidth(1.5);
    p.setAlphaf(0.055);
    const stepX = W / rt.config.chunks.cols;
    for (let gx = -W / 2; gx <= W / 2 + 1; gx += stepX) {
      const X = gx - left;
      if (X < -2 || X > VW + 2) continue;
      for (let y = 0; y < STAGE_H; y += 18) c.drawLine(X, y, X, Math.min(STAGE_H, y + 10), p);
    }
    for (let gy = -H / 2; gy <= H / 2 + 1; gy += STAGE_H) {
      const Y = top - gy;
      if (Y < -2 || Y > STAGE_H + 2) continue;
      for (let x = 0; x < VW; x += 18) c.drawLine(x, Y, Math.min(VW, x + 10), Y, p);
    }
  }

  // ------------------------------------------------------------- sprites
  private rectsOf(co: CostumeData) {
    let r = this.rects.get(co);
    if (!r) {
      r = { src: Skia.XYWHRect(0, 0, co.iw, co.ih), dst: Skia.XYWHRect(0, 0, co.width, co.height) };
      this.rects.set(co, r);
    }
    return r;
  }

  private blit(c: SkCanvas, co: CostumeData, alpha: number, color: number, fisheye: number, brightness: number) {
    const p = this.paint;
    p.setStyle(PaintStyle.Fill);
    p.setColor(Skia.Color('#ffffff'));
    p.setAlphaf(alpha);
    const { src, dst } = this.rectsOf(co);
    if ((color !== 0 || fisheye !== 0 || brightness !== 0) && applyEffects(p, co, color, Math.max(-100, fisheye), brightness)) {
      c.drawRect(dst, p);
      p.setShader(null);
    } else {
      c.drawImageRectOptions(co.image as SkImage, src, dst, FilterMode.Linear, MipmapMode.Linear, p);
    }
  }

  private drawTarget(c: SkCanvas, rt: Runtime, t: Target) {
    const co = t.costume;
    if (!co || co.empty || !co.image) return;
    const fx = t.effects;
    const ghost = Math.min(100, Math.max(0, fx.ghost));
    if (ghost >= 100) return;
    const baseAlpha = 1 - ghost / 100;
    const m = t.matrix();

    // animação de spawn (só visual)
    let kind: SpawnKind | undefined;
    let age = 0;
    let mods: SpawnMods | undefined;
    let box: Box | undefined;
    let seed = 0;
    if (!t.isClone) kind = SPAWN_KIND[t.name];
    if (kind) {
      age = rt.currentMSecs - t.spawnAt;
      if (age >= 0 && age < SPAWN_MS[kind]) {
        const b = t.screenBounds();
        if (b) {
          box = { cx: (b.left + b.right) / 2 + rt.viewW / 2, by: STAGE_H / 2 - b.bottom, w: b.right - b.left, h: b.top - b.bottom };
          seed = Math.floor(t.spawnAt) & 0xffff;
          mods = spawnMods(kind, age, box, seed);
        }
      }
    }
    if (kind && box && mods) this.spawn.under(c, kind, age, box, seed);

    const stretch = STRETCH.has(t.name); // películas que cobrem a tela (pausa/carregando) esticam até as bordas
    const draw = (alpha: number, hue: number, fish: number, dx: number, dy: number, sx: number, sy: number) => {
      c.save();
      if (mods?.clipBelow !== undefined) {
        c.clipRect(Skia.XYWHRect(-1000, -1000, 3000, 1000 + mods.clipBelow), ClipOp.Intersect, true);
      }
      if (box && (dx || dy || sx !== 1 || sy !== 1)) {
        c.translate(box.cx + dx, box.by + dy);
        c.scale(sx, sy);
        c.translate(-box.cx, -box.by);
      }
      if (stretch) {
        c.translate(rt.viewW / 2, 0);
        c.scale(rt.viewW / STAGE_W, 1);
        c.translate(-rt.viewW / 2, 0);
      }
      c.concat([m[0], m[2], m[4], m[1], m[3], m[5], 0, 0, 1]);
      this.blit(c, co, alpha, fx.color + hue, fx.fisheye + fish, fx.brightness);
      c.restore();
    };

    if (mods) {
      for (const g of mods.ghosts) draw(baseAlpha * g.alpha, g.hue, 0, mods.dx + g.dx, mods.dy + g.dy, mods.scaleX, mods.scaleY);
      if (mods.alpha > 0) draw(baseAlpha * mods.alpha, mods.hue, mods.fish, mods.dx, mods.dy, mods.scaleX, mods.scaleY);
    } else draw(baseAlpha, 0, 0, 0, 0, 1, 1);

    if (kind && box && mods) this.spawn.over(c, kind, age, box, seed);
  }

  // ------------------------------------------------------------- textos
  private wrap(s: string, font: SkFont, maxW: number): string[] {
    const lines: string[] = [];
    for (const para of s.split('\n')) {
      let line = '';
      for (const w of para.split(' ')) {
        const test = line ? `${line} ${w}` : w;
        if (font.measureText(test).width > maxW && line) {
          lines.push(line);
          line = w;
        } else line = test;
      }
      lines.push(line);
    }
    return lines;
  }

  /** balão de fala no estilo do Scratch */
  private drawBubble(c: SkCanvas, rt: Runtime, t: Target) {
    const b = t.screenBounds();
    if (!b || !t.bubble) return;
    const font = uiFont('Sans Serif', 14);
    const lines = this.wrap(t.bubble.text, font, 170);
    const w = Math.max(...lines.map((l) => font.measureText(l).width)) + 20;
    const h = lines.length * 18 + 12;
    const VW = rt.viewW;
    let x = b.right + VW / 2 - 4;
    if (x + w > VW - 2) x = b.left + VW / 2 - w + 4;
    x = Math.max(2, x);
    let y = STAGE_H / 2 - b.top - h - 14;
    y = Math.max(2, Math.min(STAGE_H - h - 2, y));
    this.rrect(c, x, y, w, h, 12, '#ffffff', 'rgba(0,0,0,0.15)', 3);
    lines.forEach((l, i) => this.text(c, l, x + 10, y + 7 + i * 18, font, '#575e75', 'left', 'top'));
  }

  private drawMonitors(c: SkCanvas, rt: Runtime) {
    const hx = (rt.viewW - STAGE_W) / 2;
    for (const base of rt.monitors.values()) {
      if (!base.visible) continue;
      const m = { ...base, x: base.x + hx };
      const value = String(rt.G[m.name] ?? '');
      if (m.mode === 'large') {
        const f = uiFont('Sans Serif', 18);
        const w = Math.max(40, f.measureText(value).width + 16);
        this.rrect(c, m.x, m.y, w, 26, 4, '#ff8c1a');
        this.text(c, value, m.x + w / 2, m.y + 13, f, '#ffffff', 'center');
        continue;
      }
      const f = uiFont('Sans Serif', 12);
      const lw = f.measureText(m.label).width;
      const vw = Math.max(36, f.measureText(value).width + 12);
      const h = 22;
      this.rrect(c, m.x, m.y, lw + vw + 20, h, 4, '#e6f0ff', 'rgba(0,0,0,0.15)', 1);
      this.text(c, m.label, m.x + 6, m.y + h / 2, f, '#575e75');
      this.rrect(c, m.x + lw + 12, m.y + 3, vw, h - 6, 3, '#ff8c1a');
      this.text(c, value, m.x + lw + 12 + vw / 2, m.y + h / 2, f, '#ffffff', 'center');
    }
  }

  // ------------------------------------------------- recorde, conquistas extras, avisos
  private drawOverlays(c: SkCanvas, rt: Runtime) {
    const VW = rt.viewW;
    const cx = VW / 2;
    const onMenu = rt.stage.costume?.def.name === 'main menu' && !!rt.sprite('play button')?.visible && String(rt.G.achievPageOpen) !== 'true';
    if (onMenu && !rt.pendingAsk) this.drawHomeRecord(c, cx);

    // tela de Conquistas, página 2: as duas conquistas extras ocupam os espaços livres
    if (String(rt.G.achievPageOpen) === 'true' && String(rt.G['achiev page']) === '2') {
      this.drawExtraCard(c, cx + 25, 180 - 0, EXTRA_ACHIEVEMENTS[0].id);
      this.drawExtraCard(c, cx + 25, 180 + 107, EXTRA_ACHIEVEMENTS[1].id);
    }

    // tela de morte: pontuação da partida x recorde (não aparece na pausa)
    const dm = rt.sprite('death message');
    if (dm?.visible && dm.costume?.def.name !== 'paused') {
      const y = 295;
      this.text(c, `Abates: ${run.kills}      Recorde: ${records.kills}`, cx, y, uiFont('Curly', 20), '#ffffff', 'center');
      if (run.brokeRecord) this.text(c, 'Novo recorde!', cx, y + 30, uiFont('Curly', 24), '#ffd23f', 'center');
    }

    // aviso de conquista extra desbloqueada
    const toast = getToast();
    if (toast) this.drawToast(c, cx, toast.id, rt.currentMSecs - toast.t0);
  }

  /** recorde na tela inicial: discreto, no topo, sem moldura */
  private drawHomeRecord(c: SkCanvas, cx: number) {
    this.text(c, 'RECORDE', cx, 38, uiFont('Sans Serif', 10), '#9a9aa5', 'center');
    this.text(c, String(records.kills), cx, 66, uiFont('Curly', 38), '#111111', 'center');
    const sub = records.plays > 0 ? `abates   ·   ${records.souls} almas   ·   ${records.plays} partidas` : 'jogue para criar o seu recorde';
    this.text(c, sub, cx, 97, uiFont('Curly', 12), '#8a8a95', 'center');
  }

  private drawIcon(c: SkCanvas, id: ExtraId, x: number, y: number, s: number, on: boolean) {
    const p = this.tp;
    p.setStyle(PaintStyle.Fill);
    const pb = Skia.PathBuilder.Make();
    if (id === 'clean') {
      // brilho de 4 pontas
      p.setColor(Skia.Color(on ? '#ffc400' : '#9a9a9a'));
      pb.moveTo(x, y - s);
      pb.quadTo(x + s * 0.18, y - s * 0.18, x + s, y);
      pb.quadTo(x + s * 0.18, y + s * 0.18, x, y + s);
      pb.quadTo(x - s * 0.18, y + s * 0.18, x - s, y);
      pb.quadTo(x - s * 0.18, y - s * 0.18, x, y - s);
    } else {
      // chama
      p.setColor(Skia.Color(on ? '#e63a1e' : '#9a9a9a'));
      pb.moveTo(x, y - s);
      pb.cubicTo(x + s * 0.2, y - s * 0.45, x + s * 0.85, y - s * 0.15, x + s * 0.6, y + s * 0.5);
      pb.cubicTo(x + s * 0.45, y + s * 0.95, x - s * 0.45, y + s * 0.95, x - s * 0.6, y + s * 0.5);
      pb.cubicTo(x - s * 0.8, y, x - s * 0.25, y - s * 0.3, x, y - s);
    }
    pb.close();
    p.setAlphaf(on ? 1 : 0.7);
    c.drawPath(pb.build(), p);
    if (id === 'hardcore') {
      const inner = Skia.PathBuilder.Make();
      inner.moveTo(x, y);
      inner.cubicTo(x + s * 0.25, y + s * 0.2, x + s * 0.3, y + s * 0.55, x, y + s * 0.62);
      inner.cubicTo(x - s * 0.3, y + s * 0.55, x - s * 0.25, y + s * 0.2, x, y);
      inner.close();
      p.setColor(Skia.Color(on ? '#ffd23f' : '#c8c8c8'));
      p.setAlphaf(on ? 1 : 0.7);
      c.drawPath(inner.build(), p);
    }
    p.setAlphaf(1);
  }

  /** cartão de conquista no mesmo estilo dos originais: caixa, nome, "X" se bloqueada e descrição embaixo */
  private drawExtraCard(c: SkCanvas, x: number, y: number, id: ExtraId) {
    const a = EXTRA_ACHIEVEMENTS.find((e) => e.id === id)!;
    const on = unlocked[id];
    const w = 122;
    const h = 52;
    const left = x - w / 2;
    const top = y - h / 2;
    const p = this.tp;
    this.rect(c, left, top, w, h, on ? '#f4efd2' : '#d9d9d9', 1);
    this.rect(c, left + 8, top + 6, w - 16, h - 12, on ? '#fffbe6' : '#f0f0f0', 1);
    p.setStyle(PaintStyle.Stroke);
    p.setStrokeWidth(2.5);
    p.setColor(Skia.Color('#000000'));
    p.setAlphaf(1);
    c.drawRect(Skia.XYWHRect(left, top, w, h), p);
    const f = uiFont('Curly', 14);
    const words = a.title.split(' ');
    words.forEach((wd, i) => this.text(c, wd, left + 9, y + (i - (words.length - 1) / 2) * 17, f, on ? '#111111' : '#8c8c8c'));
    this.drawIcon(c, id, left + w - 22, y, 15, on);
    if (!on) {
      p.setStrokeWidth(2.5);
      p.setColor(Skia.Color('#000000'));
      c.drawLine(left, top, left + w, top + h, p);
      c.drawLine(left, top + h, left + w, top, p);
    }
    const df = uiFont('Curly', 13);
    this.wrap(a.desc, df, 150).forEach((l, i) => this.text(c, l, left, top + h + 15 + i * 15, df, '#000000', 'left', 'middle'));
  }

  private drawToast(c: SkCanvas, cx: number, id: ExtraId, age: number) {
    const a = EXTRA_ACHIEVEMENTS.find((e) => e.id === id)!;
    const slide = 320;
    let k = 1;
    if (age < slide) k = age / slide;
    else if (age > TOAST_MS - slide) k = Math.max(0, (TOAST_MS - age) / slide);
    const e = 1 - Math.pow(1 - k, 3);
    const w = 236;
    const h = 46;
    const x = cx + 18 - w / 2;
    const y = -h + (h + 10) * e;
    this.rrect(c, x, y, w, h, 9, '#000000', '#ffd23f', 2);
    this.drawIcon(c, id, x + 26, y + h / 2, 14, true);
    this.text(c, 'CONQUISTA DESBLOQUEADA', x + 50, y + 14, uiFont('Sans Serif', 9), '#ffd23f');
    this.text(c, a.title, x + 50, y + 31, uiFont('Curly', 19), '#ffffff');
  }
}
