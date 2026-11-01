// Conversões de tipo idênticas às do Scratch 3 (scratch-vm/src/util/cast.js)
export type Value = string | number | boolean;

export const isWhiteSpace = (v: Value): boolean =>
  v === null || v === undefined || (typeof v === 'string' && v.trim().length === 0);

export function num(v: Value): number {
  if (typeof v === 'number') return Number.isNaN(v) ? 0 : v;
  const n = Number(v);
  if (Number.isNaN(n)) return 0;
  if (n === 0 && isWhiteSpace(v)) return 0;
  return n;
}

export function bool(v: Value): boolean {
  if (typeof v === 'boolean') return v;
  if (typeof v === 'string') {
    if (v === '' || v === '0' || v.toLowerCase() === 'false') return false;
    return true;
  }
  return Boolean(v);
}

export const str = (v: Value): string => String(v);

export function compare(v1: Value, v2: Value): number {
  let n1 = Number(v1);
  let n2 = Number(v2);
  if (n1 === 0 && isWhiteSpace(v1)) n1 = NaN;
  else if (n2 === 0 && isWhiteSpace(v2)) n2 = NaN;
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    const s1 = String(v1).toLowerCase();
    const s2 = String(v2).toLowerCase();
    if (s1 < s2) return -1;
    if (s1 > s2) return 1;
    return 0;
  }
  if ((n1 === Infinity && n2 === Infinity) || (n1 === -Infinity && n2 === -Infinity)) return 0;
  return n1 - n2;
}

export const eq = (a: Value, b: Value) => compare(a, b) === 0;
export const gt = (a: Value, b: Value) => compare(a, b) > 0;
export const lt = (a: Value, b: Value) => compare(a, b) < 0;

const isInt = (v: Value): boolean => {
  if (typeof v === 'number') return Number.isNaN(v) ? true : v === parseInt(String(v), 10);
  if (typeof v === 'boolean') return true;
  if (typeof v === 'string') return v.indexOf('.') < 0;
  return false;
};

export function rand(a: Value, b: Value): number {
  let lo = num(a);
  let hi = num(b);
  if (lo === hi) return lo;
  if (lo > hi) [lo, hi] = [hi, lo];
  if (isInt(a) && isInt(b)) return lo + Math.floor(Math.random() * (hi + 1 - lo));
  return Math.random() * (hi - lo) + lo;
}

export const join = (a: Value, b: Value) => str(a) + str(b);
export const letterOf = (idx: Value, s: Value) => {
  const i = num(idx) - 1;
  const text = str(s);
  return i < 0 || i >= text.length ? '' : text.charAt(i);
};

export const degToRad = (d: number) => (d * Math.PI) / 180;
export const radToDeg = (r: number) => (r * 180) / Math.PI;
export const clamp = (n: number, lo: number, hi: number) => Math.min(Math.max(n, lo), hi);
export const wrapClamp = (n: number, lo: number, hi: number) => {
  const range = hi - lo + 1;
  return n - Math.floor((n - lo) / range) * range;
};
export const limitPrecision = (n: number) => {
  const r = Math.round(n);
  return Math.abs(n - r) < 1e-9 ? r : Math.round(n * 1e9) / 1e9;
};
