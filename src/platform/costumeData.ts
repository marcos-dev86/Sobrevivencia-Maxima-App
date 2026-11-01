import { unzlibSync } from 'fflate';
import type { CostumeData, CostumeDef } from '../engine/types';
import costumesJson from '../game/costumes.json';

export interface CostumeInfo {
  iw: number;
  ih: number;
  mw: number;
  mh: number;
  hull: [number, number][];
  mask: string; // base64(zlib(bits))
}
export const costumeInfo = costumesJson as unknown as Record<string, CostumeInfo>;

const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const LUT = new Uint8Array(128);
for (let i = 0; i < 64; i++) LUT[B64.charCodeAt(i)] = i;

export function b64decode(s: string): Uint8Array {
  let n = s.length;
  while (n > 0 && s.charCodeAt(n - 1) === 61) n--;
  const out = new Uint8Array(Math.floor((n * 3) / 4));
  let o = 0;
  let buf = 0;
  let bits = 0;
  for (let i = 0; i < n; i++) {
    buf = (buf << 6) | LUT[s.charCodeAt(i)];
    bits += 6;
    if (bits >= 8) {
      bits -= 8;
      out[o++] = (buf >> bits) & 0xff;
    }
  }
  return out;
}

/** Monta a fantasia (geometria + máscara de colisão) a partir do manifesto; `image` vem da plataforma. */
export function buildCostume(def: CostumeDef, image: unknown): CostumeData {
  const info = costumeInfo[def.file];
  const width = def.w / def.res;
  const height = def.h / def.res;
  const c: CostumeData = {
    def,
    width,
    height,
    cx: (def.rcx - def.vx) / def.res,
    cy: (def.rcy - def.vy) / def.res,
    kx: 1,
    ky: 1,
    mask: new Uint8Array(1),
    rw: 1,
    rh: 1,
    stride: 1,
    hull: [],
    empty: true,
    image,
    iw: info?.iw ?? 0,
    ih: info?.ih ?? 0,
  };
  if (!info || def.w <= 0 || def.h <= 0 || !info.mw || !info.hull.length) return c;
  c.rw = info.mw;
  c.rh = info.mh;
  c.stride = (info.mw + 7) >> 3;
  c.kx = info.mw / width;
  c.ky = info.mh / height;
  c.mask = unzlibSync(b64decode(info.mask));
  c.hull = info.hull;
  c.empty = false;
  return c;
}
