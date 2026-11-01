export interface CostumeDef {
  name: string;
  file: string; // md5ext original do Scratch (chave do manifesto de assets)
  ext: 'svg' | 'png';
  rcx: number; // centro de rotação (coordenadas originais do Scratch)
  rcy: number;
  res: number; // bitmapResolution
  vx: number; // offset do viewBox normalizado (SVG)
  vy: number;
  w: number; // tamanho do arquivo normalizado
  h: number;
}

export interface SoundDef {
  name: string;
  file: string;
  rate: number;
  samples: number;
}

export interface TargetDef {
  name: string;
  isStage: boolean;
  costumes: CostumeDef[];
  sounds: SoundDef[];
  vars: Record<string, string | number | boolean>;
  x: number;
  y: number;
  size: number;
  /** maior tamanho usado pelos scripts (define a resolução de rasterização) */
  maxSize: number;
  direction: number;
  visible: boolean;
  currentCostume: number;
  rotationStyle: 'all around' | 'left-right' | "don't rotate";
  volume: number;
  layerOrder: number;
}

export const STAGE_W = 480;
export const STAGE_H = 360;

/** Fantasia já carregada, independente de plataforma (a imagem é opaca para o motor). */
export interface CostumeData {
  def: CostumeDef;
  /** tamanho lógico (unidades do palco a 100%) */
  width: number;
  height: number;
  /** centro de rotação em unidades locais (origem no canto superior esquerdo da imagem) */
  cx: number;
  cy: number;
  /** razão pixels-da-máscara / unidades */
  kx: number;
  ky: number;
  /** máscara de colisão (1 bit por pixel, linhas alinhadas em byte) */
  mask: Uint8Array;
  rw: number;
  rh: number;
  stride: number;
  /** casco convexo em unidades locais */
  hull: [number, number][];
  empty: boolean;
  /** imagem da plataforma (SkImage no app) */
  image: unknown;
  /** tamanho em pixels da imagem de desenho */
  iw: number;
  ih: number;
}

export const maskHit = (c: CostumeData, ix: number, iy: number): boolean =>
  (c.mask[iy * c.stride + (ix >> 3)] & (0x80 >> (ix & 7))) !== 0;

/** Interface de áudio exigida pelo motor. */
export interface SoundHandle {
  playing: boolean;
  stop(): void;
  setVolume(v: number): void;
}
export interface AudioLike {
  play(owner: string, file: string, volume: number): SoundHandle | null;
  setOwnerVolume(owner: string, volume: number): void;
  stopAll(): void;
}

/** Tudo o que o motor precisa da plataforma. */
export interface Platform {
  loadCostume(def: CostumeDef, spriteName: string): Promise<CostumeData>;
  audio: AudioLike;
  now(): number;
}
