import { createAudioPlayer, setAudioModeAsync, type AudioPlayer } from 'expo-audio';
import type { AudioLike, SoundDef, SoundHandle } from '../engine/types';
import { soundFiles } from '../game/assetMap';

interface Slot {
  player: AudioPlayer | null;
  handle: SoundHandle | null;
  owner: string;
  timer: ReturnType<typeof setTimeout> | null;
  duration: number;
}

/**
 * Áudio com expo-audio. Há um player por ARQUIVO de som (são só ~18 arquivos): tocar de novo o mesmo
 * som reinicia, como no Scratch. Evita criar centenas de decodificadores no Android.
 */
export class NativeAudio implements AudioLike {
  private slots = new Map<string, Slot>();
  private paused = false;

  async init(defs: SoundDef[]) {
    try {
      await setAudioModeAsync({ playsInSilentMode: true, interruptionMode: 'mixWithOthers' });
    } catch {
      /* segue sem configurar */
    }
    for (const d of defs) {
      if (!this.slots.has(d.file)) {
        this.slots.set(d.file, { player: null, handle: null, owner: '', timer: null, duration: d.rate ? d.samples / d.rate : 0 });
      }
    }
  }

  /** cria os players em segundo plano (evita travadinha na primeira vez que cada som toca) */
  warmUp() {
    const keys = [...this.slots.keys()];
    keys.forEach((k, i) =>
      setTimeout(() => {
        try {
          this.ensure(k);
        } catch {
          /* ignorado */
        }
      }, 120 * i),
    );
  }

  private ensure(file: string): AudioPlayer | null {
    const s = this.slots.get(file);
    if (!s) return null;
    if (!s.player) {
      const src = soundFiles[file];
      if (src === undefined) return null;
      const p = createAudioPlayer(src, { updateInterval: 100 });
      p.addListener('playbackStatusUpdate', (st: { didJustFinish?: boolean }) => {
        if (st.didJustFinish && s.handle) this.finish(s);
      });
      s.player = p;
    }
    return s.player;
  }

  private finish(s: Slot) {
    if (s.handle) s.handle.playing = false;
    if (s.timer) clearTimeout(s.timer);
    s.timer = null;
  }

  play(owner: string, file: string, volume: number): SoundHandle | null {
    const s = this.slots.get(file);
    if (!s) return null;
    const p = this.ensure(file);
    if (!p) return null;
    if (s.handle) s.handle.playing = false;
    if (s.timer) clearTimeout(s.timer);
    const vol = Math.max(0, Math.min(100, volume)) / 100;
    const handle: SoundHandle = {
      playing: true,
      stop: () => {
        if (!handle.playing) return;
        handle.playing = false;
        try {
          p.pause();
        } catch {
          /* ignorado */
        }
      },
      setVolume: (v) => {
        try {
          p.volume = Math.max(0, Math.min(100, v)) / 100;
        } catch {
          /* ignorado */
        }
      },
    };
    s.handle = handle;
    s.owner = owner;
    try {
      p.volume = vol;
      p.pause();
      void p.seekTo(0);
      if (!this.paused) p.play();
    } catch (e) {
      handle.playing = false;
      return handle;
    }
    // garantia: se o evento de "terminou" não chegar, encerra pelo tempo do arquivo
    if (s.duration > 0) {
      s.timer = setTimeout(() => {
        if (s.handle === handle) this.finish(s);
      }, s.duration * 1000 + 400);
    }
    return handle;
  }

  setOwnerVolume(owner: string, volume: number) {
    for (const s of this.slots.values()) if (s.owner === owner && s.handle?.playing) s.handle.setVolume(volume);
  }

  stopAll() {
    for (const s of this.slots.values()) {
      if (s.handle?.playing) s.handle.stop();
      this.finish(s);
    }
  }

  /** app foi para segundo plano */
  pauseAll() {
    this.paused = true;
    for (const s of this.slots.values()) if (s.handle?.playing) try { s.player?.pause(); } catch { /* ignorado */ }
  }
  resumeAll() {
    this.paused = false;
    for (const s of this.slots.values()) if (s.handle?.playing) try { s.player?.play(); } catch { /* ignorado */ }
  }
}
