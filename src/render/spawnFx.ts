import { Skia, type SkCanvas, PaintStyle } from '@shopify/react-native-skia';

/**
 * Animações de SPAWN (só visuais — a lógica/colisão do jogo não muda).
 *
 * Cada tipo de monstro tem a sua animação e cada chefe tem uma exclusiva:
 *   zombie           -> "dig"   : sai da terra, jogando terra pra cima
 *   zombie2          -> "toxic" : poça tóxica verde, borbulhando, cresce com ressalto
 *   zombie3          -> "void"  : vórtice roxo que se fecha num clarão
 *   zombie knight    -> "drop"  : cai do alto de armadura, onda de choque + faíscas
 *   boss brute       -> "quake" : o chão racha, ondas de fogo e pedras voam
 *   boss trans       -> "glitch": fenda na realidade, imagem com defeito (RGB split)
 *   boss hipnotiser  -> "hypno" : espirais hipnóticas, anéis e a imagem "respira" (olho de peixe)
 */
export type SpawnKind = 'dig' | 'toxic' | 'void' | 'drop' | 'quake' | 'glitch' | 'hypno';

export const SPAWN_KIND: Record<string, SpawnKind> = {
  zombie: 'dig',
  zombie2: 'toxic',
  zombie3: 'void',
  'zombie knight': 'drop',
  'boss brute': 'quake',
  'boss trans': 'glitch',
  'boss hipnotiser': 'hypno',
};

export const SPAWN_MS: Record<SpawnKind, number> = {
  dig: 750,
  toxic: 850,
  void: 950,
  drop: 850,
  quake: 1900,
  glitch: 1700,
  hypno: 2100,
};

/** Retângulo do sprite em coordenadas do palco-canvas (y para baixo). `by` = pés. */
export interface Box {
  cx: number;
  by: number;
  w: number;
  h: number;
}

export interface Ghost {
  dx: number;
  dy: number;
  hue: number;
  alpha: number;
}

export interface SpawnMods {
  alpha: number;
  scaleX: number;
  scaleY: number;
  dx: number;
  dy: number;
  /** se definido, só desenha o que está acima desta linha (y de canvas) — "saindo do chão" */
  clipBelow?: number;
  hue: number;
  fish: number;
  ghosts: Ghost[];
}

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const easeOut = (v: number) => 1 - Math.pow(1 - clamp01(v), 3);
const easeIn = (v: number) => clamp01(v) * clamp01(v);
const easeOutBack = (v: number) => {
  const t = clamp01(v) - 1;
  return 1 + 2.70158 * t * t * t + 1.70158 * t * t;
};

function rnd(seed: number, i: number): number {
  let h = (seed * 374761393 + i * 668265263) | 0;
  h = (h ^ (h >>> 13)) * 1274126177;
  h = h ^ (h >>> 16);
  return (h >>> 0) / 4294967296;
}

export function spawnMods(kind: SpawnKind, age: number, box: Box, seed: number): SpawnMods {
  const u = clamp01(age / SPAWN_MS[kind]);
  const m: SpawnMods = { alpha: 1, scaleX: 1, scaleY: 1, dx: 0, dy: 0, hue: 0, fish: 0, ghosts: [] };
  switch (kind) {
    case 'dig': {
      m.clipBelow = box.by;
      m.dy = (1 - easeOut(u * 1.15)) * box.h * 0.95;
      break;
    }
    case 'toxic': {
      const s = 0.15 + 0.85 * easeOutBack(u * 1.1);
      m.scaleX = s;
      m.scaleY = s;
      m.alpha = clamp01(u * 3);
      break;
    }
    case 'void': {
      m.alpha = clamp01((u - 0.4) / 0.25);
      const s = 1 + 0.35 * (1 - easeOut((u - 0.4) / 0.4));
      m.scaleX = s;
      m.scaleY = s;
      break;
    }
    case 'drop': {
      const f = clamp01(u / 0.55);
      m.dy = -(1 - easeIn(f)) * 150;
      if (u > 0.55 && u < 0.75) {
        const q = (u - 0.55) / 0.2;
        m.scaleY = 1 - 0.14 * Math.sin(q * Math.PI);
        m.scaleX = 1 + 0.1 * Math.sin(q * Math.PI);
      }
      m.alpha = clamp01(u * 6);
      break;
    }
    case 'quake': {
      const s = 0.35 + 0.65 * easeOut(u * 1.05);
      m.scaleX = s;
      m.scaleY = s;
      m.alpha = clamp01(u * 4);
      m.dx = Math.sin(age * 0.09) * (1 - u) * 5;
      m.dy = Math.cos(age * 0.13) * (1 - u) * 3;
      break;
    }
    case 'glitch': {
      m.alpha = clamp01((u - 0.22) / 0.35);
      const tick = Math.floor(age / 70);
      const amp = Math.pow(1 - u, 1.4);
      m.dx = (rnd(seed, tick) - 0.5) * 26 * amp;
      m.scaleX = 1 + (rnd(seed, tick + 99) - 0.5) * 0.25 * amp;
      m.hue = Math.sin(age / 90) * 70 * amp;
      if (u > 0.22) {
        m.ghosts.push({ dx: 12 * amp, dy: 0, hue: 70, alpha: 0.55 * amp });
        m.ghosts.push({ dx: -12 * amp, dy: 0, hue: -70, alpha: 0.55 * amp });
      }
      break;
    }
    case 'hypno': {
      m.alpha = clamp01((u - 0.12) / 0.5);
      const pulse = Math.sin(age / 95) * (1 - u);
      m.scaleX = 1 + 0.1 * pulse;
      m.scaleY = 1 + 0.1 * pulse;
      m.fish = 75 * pulse;
      break;
    }
  }
  return m;
}

export class SpawnPainter {
  private p = Skia.Paint();
  constructor() {
    this.p.setAntiAlias(true);
  }

  private fill(c: SkCanvas, css: string, a: number) {
    this.p.setStyle(PaintStyle.Fill);
    this.p.setColor(Skia.Color(css));
    this.p.setAlphaf(Math.max(0, Math.min(1, a)));
    return this.p;
  }
  private line(c: SkCanvas, css: string, a: number, w: number) {
    this.p.setStyle(PaintStyle.Stroke);
    this.p.setStrokeWidth(w);
    this.p.setColor(Skia.Color(css));
    this.p.setAlphaf(Math.max(0, Math.min(1, a)));
    return this.p;
  }
  private ellipse(c: SkCanvas, x: number, y: number, rx: number, ry: number, paint: ReturnType<SpawnPainter['fill']>) {
    if (rx <= 0 || ry <= 0) return;
    c.drawOval(Skia.XYWHRect(x - rx, y - ry, rx * 2, ry * 2), paint);
  }

  /** desenhado ANTES do sprite (no chão / atrás) */
  under(c: SkCanvas, kind: SpawnKind, age: number, box: Box, seed: number) {
    const u = clamp01(age / SPAWN_MS[kind]);
    const { cx, by } = box;
    const midY = by - box.h / 2;
    switch (kind) {
      case 'dig': {
        const open = Math.min(1, u * 3) * (1 - clamp01((u - 0.75) / 0.25));
        this.ellipse(c, cx, by, 20 * open, 6.5 * open, this.fill(c, '#2e1f0e', 0.85));
        this.ellipse(c, cx, by, 26 * open, 9 * open, this.line(c, '#6b4f2a', 0.7, 2));
        break;
      }
      case 'toxic': {
        const r = 10 + 28 * easeOut(u);
        const fade = 1 - clamp01((u - 0.55) / 0.45);
        this.ellipse(c, cx, by, r, r * 0.38, this.fill(c, '#39ff14', 0.28 * fade));
        this.ellipse(c, cx, by, r, r * 0.38, this.line(c, '#9cff5a', 0.9 * fade, 2.5));
        this.ellipse(c, cx, by, r * 0.6, r * 0.22, this.line(c, '#d6ffb0', 0.6 * fade, 1.5));
        break;
      }
      case 'void': {
        for (let k = 0; k < 3; k++) {
          const ph = (u * 1.5 + k / 3) % 1;
          const r = 44 * (1 - ph);
          this.ellipse(c, cx, midY, r, r * 0.9, this.line(c, k % 2 ? '#d58bff' : '#8a2be2', ph * (1 - u * 0.5), 2.5));
        }
        for (let i = 0; i < 8; i++) {
          const a = u * 9 + (i * Math.PI) / 4;
          const rr = 42 * (1 - easeOut(u));
          c.drawCircle(cx + Math.cos(a) * rr, midY + Math.sin(a) * rr * 0.9, 2.4, this.fill(c, '#e6b3ff', 1 - u));
        }
        break;
      }
      case 'drop': {
        const f = clamp01(u / 0.55);
        const rx = 6 + 22 * easeIn(f);
        this.ellipse(c, cx, by, rx, rx * 0.35, this.fill(c, '#000000', 0.12 + 0.28 * easeIn(f)));
        break;
      }
      case 'quake': {
        const fade = 1 - clamp01((u - 0.72) / 0.28);
        const grow = easeOut(Math.min(1, u * 2));
        for (let i = 0; i < 9; i++) {
          const a = (i / 9) * Math.PI * 2 + rnd(seed, i) * 0.4;
          const len = (45 + rnd(seed, i + 40) * 55) * grow;
          const x1 = cx + Math.cos(a) * len;
          const y1 = by + Math.sin(a) * len * 0.45;
          c.drawLine(cx, by, x1, y1, this.line(c, '#24150b', 0.9 * fade, 3.2));
          c.drawLine(cx, by, x1, y1, this.line(c, '#ff7a2f', 0.55 * fade, 1.2));
        }
        for (let k = 0; k < 3; k++) {
          const v = clamp01((u - k * 0.12) / 0.55);
          if (v <= 0 || v >= 1) continue;
          const r = 12 + 105 * easeOut(v);
          this.ellipse(c, cx, by, r, r * 0.45, this.line(c, k === 0 ? '#ffd23f' : '#ff5a1f', 1 - v, 4 - k));
        }
        break;
      }
      case 'glitch': {
        const open = easeOut(Math.min(1, u * 3.2)) * (1 - easeOut(clamp01((u - 0.62) / 0.38)));
        const w = 3 + 26 * open;
        const h = box.h * 1.35 * open + 10;
        c.drawRect(Skia.XYWHRect(cx - w * 1.6, midY - h / 2, w * 3.2, h), this.fill(c, '#00e5ff', 0.28 * open));
        c.drawRect(Skia.XYWHRect(cx - w / 2, midY - h / 2, w, h), this.fill(c, '#ffffff', 0.92 * open));
        // linhas de varredura
        for (let i = 0; i < 7; i++) {
          const tick = Math.floor(age / 80) + i * 7;
          const yy = by - rnd(seed, tick) * box.h;
          const ww = 20 + rnd(seed, tick + 5) * 50;
          const xx = cx - ww / 2 + (rnd(seed, tick + 9) - 0.5) * 40;
          c.drawRect(Skia.XYWHRect(xx, yy, ww, 2), this.fill(c, i % 2 ? '#00e5ff' : '#ff2bd6', 0.65 * (1 - u)));
        }
        break;
      }
      case 'hypno': {
        const R = 100 * easeOut(Math.min(1, u * 1.6));
        const fade = 1 - clamp01((u - 0.7) / 0.3);
        const rot = age / 170;
        for (let arm = 0; arm < 3; arm++) {
          for (let i = 1; i <= 26; i++) {
            const f = i / 26;
            const a = rot + (arm * Math.PI * 2) / 3 + f * Math.PI * 3.2;
            const r = R * f;
            c.drawCircle(cx + Math.cos(a) * r, midY + Math.sin(a) * r, 1.6 + f * 2.4, this.fill(c, i % 2 ? '#ff3df0' : '#8a5bff', (1 - f * 0.4) * fade * 0.9));
          }
        }
        break;
      }
    }
  }

  /** desenhado DEPOIS do sprite (partículas, clarões) */
  over(c: SkCanvas, kind: SpawnKind, age: number, box: Box, seed: number) {
    const u = clamp01(age / SPAWN_MS[kind]);
    const sec = age / 1000;
    const { cx, by } = box;
    const midY = by - box.h / 2;
    switch (kind) {
      case 'dig': {
        for (let i = 0; i < 14; i++) {
          const a = -Math.PI * (0.18 + 0.64 * rnd(seed, i));
          const v = 80 + rnd(seed, i + 20) * 90;
          const x = cx + Math.cos(a) * v * sec * 0.9;
          const y = by + Math.sin(a) * v * sec + 420 * sec * sec * 0.5;
          const col = i % 3 === 0 ? '#8a6a3b' : i % 3 === 1 ? '#6b4f2a' : '#4a351b';
          c.drawRect(Skia.XYWHRect(x - 1.8, y - 1.8, 3.6, 3.6), this.fill(c, col, 1 - u * u));
        }
        break;
      }
      case 'toxic': {
        for (let i = 0; i < 9; i++) {
          const x = cx + (rnd(seed, i) - 0.5) * 34;
          const y = by - (22 + rnd(seed, i + 9) * 40) * easeOut(u) - ((age / 15 + i * 9) % 14);
          const r = 1.6 + rnd(seed, i + 18) * 2.6;
          c.drawCircle(x, y, r, this.line(c, '#b8ff7a', 1 - u, 1.2));
        }
        break;
      }
      case 'void': {
        const v = 1 - Math.abs(u - 0.45) / 0.12;
        if (v > 0) c.drawCircle(cx, midY, 14 + 20 * (1 - v), this.fill(c, '#f3dcff', 0.75 * v));
        break;
      }
      case 'drop': {
        if (u <= 0.55) break;
        const v = clamp01((u - 0.55) / 0.45);
        const r = 8 + 40 * easeOut(v);
        this.ellipse(c, cx, by, r, r * 0.33, this.line(c, '#dfe7eb', 1 - v, 3));
        for (let i = 0; i < 9; i++) {
          const a = -Math.PI * (0.1 + 0.8 * (i / 8));
          const d = 14 + 36 * easeOut(v) * (0.6 + rnd(seed, i) * 0.6);
          const x = cx + Math.cos(a) * d * 1.3;
          const y = by + Math.sin(a) * d * 0.9 + 40 * v * v;
          c.drawLine(x, y, x + Math.cos(a) * 5, y + Math.sin(a) * 5, this.line(c, '#ffe27a', 1 - v, 2));
        }
        break;
      }
      case 'quake': {
        for (let i = 0; i < 18; i++) {
          const a = -Math.PI * (0.12 + 0.76 * rnd(seed, i));
          const v = 90 + rnd(seed, i + 30) * 140;
          const x = cx + Math.cos(a) * v * sec * 0.8;
          const y = by + Math.sin(a) * v * sec + 520 * sec * sec * 0.5;
          if (y > by + 14) continue;
          const s = 3 + rnd(seed, i + 60) * 4;
          c.drawRect(Skia.XYWHRect(x - s / 2, y - s / 2, s, s), this.fill(c, i % 2 ? '#5a4636' : '#8a7560', 1 - u * u));
        }
        for (let i = 0; i < 5; i++) {
          const v = clamp01((u * 1.3 - i * 0.07) / 0.9);
          if (v <= 0 || v >= 1) continue;
          const x = cx + (i - 2) * 26;
          c.drawCircle(x, by - 4 - 26 * v, 10 + 22 * v, this.fill(c, '#9a8670', 0.35 * (1 - v)));
        }
        break;
      }
      case 'glitch': {
        for (let i = 0; i < 14; i++) {
          const tick = Math.floor(age / 90);
          const a = rnd(seed, i) * Math.PI * 2;
          const d = 10 + (rnd(seed, i + 7) * 60 + age / 12) % 70;
          const x = cx + Math.cos(a) * d + (rnd(seed, tick + i) - 0.5) * 6;
          const y = midY + Math.sin(a) * d * 0.9;
          const s = 2 + rnd(seed, i + 17) * 4;
          c.drawRect(Skia.XYWHRect(x, y, s, s), this.fill(c, i % 3 === 0 ? '#ffffff' : i % 3 === 1 ? '#00e5ff' : '#ff2bd6', (1 - u) * 0.9));
        }
        break;
      }
      case 'hypno': {
        for (let k = 0; k < 4; k++) {
          const v = (u * 1.4 + k * 0.25) % 1;
          const r = 22 + 105 * v;
          c.drawCircle(cx, midY, r, this.line(c, k % 2 ? '#ffffff' : '#ff3df0', (1 - v) * (1 - u * 0.6) * 0.8, 3));
        }
        break;
      }
    }
  }
}
