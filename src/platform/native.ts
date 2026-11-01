import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import { Skia, type SkFont, type SkImage, type SkTypeface } from '@shopify/react-native-skia';
import type { CostumeData, CostumeDef, Platform } from '../engine/types';
import { costumeImages, uiFonts } from '../game/assetMap';
import { NativeAudio } from './audio';
import { buildCostume, costumeInfo } from './costumeData';

const uriOf = (mod: unknown): string => {
  // no Android/iOS o Skia (useImage) usa resolveAssetSource; na web (react-native-web) ele não existe
  const resolve = (Image as unknown as { resolveAssetSource?: (m: number) => { uri: string } | undefined }).resolveAssetSource;
  if (typeof resolve === 'function') {
    const src = resolve(mod as number);
    if (!src) throw new Error('asset não encontrado');
    return src.uri;
  }
  return Asset.fromModule(mod as number).uri;
};

export const audio = new NativeAudio();

const typefaces: Record<string, SkTypeface | null> = {};
const fontCache = new Map<string, SkFont>();

/** Carrega as fontes do Scratch usadas na interface (Curly e Sans Serif). */
export async function loadUiFonts() {
  await Promise.all(
    Object.entries(uiFonts).map(async ([family, mod]) => {
      try {
        const data = await Skia.Data.fromURI(uriOf(mod));
        typefaces[family] = Skia.Typeface.MakeFreeTypeFaceFromData(data);
      } catch (e) {
        console.warn('fonte não carregada', family, e);
        typefaces[family] = null;
      }
    }),
  );
}

export function uiFont(family: 'Curly' | 'Sans Serif', size: number): SkFont {
  const key = `${family}|${size}`;
  let f = fontCache.get(key);
  if (!f) {
    f = Skia.Font(typefaces[family] ?? undefined, size);
    fontCache.set(key, f);
  }
  return f;
}

async function loadImage(file: string): Promise<SkImage | null> {
  const mod = costumeImages[file.replace(/\.[a-z0-9]+$/, '') + '.png'] ?? costumeImages[file];
  if (mod === undefined) return null;
  const data = await Skia.Data.fromURI(uriOf(mod));
  return Skia.Image.MakeImageFromEncoded(data);
}

export const nativePlatform: Platform = {
  audio,
  now: () => performance.now(),
  async loadCostume(def: CostumeDef): Promise<CostumeData> {
    const info = costumeInfo[def.file];
    let image: SkImage | null = null;
    if (info && info.iw > 0) {
      try {
        image = await loadImage(def.file);
      } catch (e) {
        console.warn('fantasia não carregada', def.file, e);
      }
    }
    const c = buildCostume(def, image);
    if (!image) c.empty = true;
    return c;
  },
};
