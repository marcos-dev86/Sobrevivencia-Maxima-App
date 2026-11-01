import { FilterMode, MipmapMode, Skia, TileMode, type SkImage, type SkPaint, type SkRuntimeEffect, type SkShader } from '@shopify/react-native-skia';
import type { CostumeData } from '../engine/types';

/**
 * Efeitos gráficos do Scratch (cor, olho de peixe, brilho) num único shader SkSL,
 * com a mesma matemática do shader do Scratch 3.
 */
const SRC = `
uniform shader image;
uniform float2 size;
uniform float hue;
uniform float bright;
uniform float fish;

half3 rgb2hsv(half3 c) {
  half4 K = half4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  half4 p = mix(half4(c.bg, K.wz), half4(c.gb, K.xy), step(c.b, c.g));
  half4 q = mix(half4(p.xyw, c.r), half4(c.r, p.yzx), step(p.x, c.r));
  half d = q.x - min(q.w, q.y);
  half e = 1.0e-3;
  return half3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
half3 hsv2rgb(half3 c) {
  half4 K = half4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  half3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

half4 main(float2 p) {
  float2 uv = p / size;
  float2 v = (uv - 0.5) * 2.0;
  float len = length(v);
  if (len > 0.0) {
    float r = pow(min(len, 1.0), fish) * max(1.0, len);
    uv = float2(0.5) + (r * v / len) * 0.5;
  }
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return half4(0.0);
  half4 c = image.eval(uv * size);
  half a = c.a;
  if (a <= 0.0) return half4(0.0);
  half3 rgb = c.rgb / a;
  if (hue != 0.0) {
    half3 hsv = rgb2hsv(rgb);
    if (hsv.z < 0.055) hsv = half3(0.0, 1.0, 0.055);
    else if (hsv.y < 0.09) hsv = half3(0.0, 0.09, hsv.z);
    hsv.x = fract(hsv.x + hue);
    rgb = hsv2rgb(hsv);
  }
  rgb = clamp(rgb + half3(bright), 0.0, 1.0);
  return half4(rgb * a, a);
}
`;

let effect: SkRuntimeEffect | null | undefined;
const shaders = new WeakMap<CostumeData, SkShader>();

function getEffect() {
  if (effect === undefined) {
    effect = Skia.RuntimeEffect.Make(SRC);
    if (!effect) console.warn('shader de efeitos não compilou');
  }
  return effect;
}

/** Aplica cor/olho-de-peixe/brilho ao `paint` (que será usado em drawRect na caixa 0,0,largura,altura). */
export function applyEffects(paint: SkPaint, c: CostumeData, color: number, fisheye: number, brightness: number): boolean {
  const eff = getEffect();
  if (!eff) return false;
  let sh = shaders.get(c);
  if (!sh) {
    const m = Skia.Matrix();
    m.scale(c.width / c.iw, c.height / c.ih);
    sh = (c.image as SkImage).makeShaderOptions(TileMode.Clamp, TileMode.Clamp, FilterMode.Linear, MipmapMode.None, m);
    shaders.set(c, sh);
  }
  const fish = Math.max(0, (fisheye + 100) / 100);
  const b = Math.min(100, Math.max(-100, brightness)) / 100;
  paint.setShader(eff.makeShaderWithChildren([c.width, c.height, color / 200, b, fish], [sh]));
  return true;
}
