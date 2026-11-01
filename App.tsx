import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AppState,
  type GestureResponderEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  type LayoutChangeEvent,
} from 'react-native';
import { Canvas, Picture, type SkPicture } from '@shopify/react-native-skia';
import { StatusBar } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as NavigationBar from 'expo-navigation-bar';
import { activateKeepAwakeAsync } from 'expo-keep-awake';
import { rt } from './src/engine/runtime';
import { STAGE_H, STAGE_W } from './src/engine/types';
import { gameConfig } from './src/game/config';
import { monitors, targets } from './src/game/project.generated';
import { allScripts } from './src/game/scripts';
import { installExtras, loadExtras } from './src/game/extras';
import { installRecords, loadRecords } from './src/game/records';
import { clearSnapshot, installSave, loadSnapshot, resumeGame, writeSnapshot, type Snapshot } from './src/game/save';
import { installWorldRules } from './src/game/world';
import { audio, loadUiFonts, nativePlatform } from './src/platform/native';
import { Renderer } from './src/render/draw';

type Phase = 'loading' | 'ready' | 'playing' | 'error';

export default function App() {
  const [phase, setPhase] = useState<Phase>('loading');
  const [progress, setProgress] = useState({ p: 0, label: 'Iniciando' });
  const [error, setError] = useState('');
  const [ask, setAsk] = useState<string | null>(null);
  const [askText, setAskText] = useState('');
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [picture, setPicture] = useState<SkPicture | null>(null);
  const [saved, setSaved] = useState<Snapshot | null>(null); // partida salva (ao abrir o app)
  const [pausedDialog, setPausedDialog] = useState(false); // voltou de segundo plano no meio da partida
  const askRef = useRef<string | null>(null);
  const renderer = useMemo(() => new Renderer(), []);
  askRef.current = ask;
  const sizeRef = useRef(size);
  sizeRef.current = size;
  const phaseRef = useRef<Phase>('loading');
  phaseRef.current = phase;

  const redraw = useCallback(() => {
    const { w, h } = sizeRef.current;
    if (w > 0 && h > 0) setPicture(renderer.render(rt, w, h));
  }, [renderer]);

  // ------------------------------------------------ tela cheia, paisagem, tela sempre ligada
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE).catch(() => {});
    activateKeepAwakeAsync().catch(() => {});
    if (Platform.OS === 'android') NavigationBar.setVisibilityAsync('hidden').catch(() => {});
  }, []);

  // ---------------------------------------------------------------- carregamento
  useEffect(() => {
    let cancelled = false;
    installWorldRules(rt);
    installRecords(rt);
    installExtras(rt);
    installSave(rt);
    rt.onAsk = (q) => {
      setAsk(q);
      setAskText('');
    };
    rt.onFrame = redraw;
    (globalThis as any).__rt = rt;
    (async () => {
      await loadUiFonts();
      await loadRecords();
      await loadExtras();
      const snap = await loadSnapshot();
      await audio.init(targets.flatMap((t) => t.sounds));
      await rt.load(targets, allScripts, gameConfig, monitors, nativePlatform, (p, label) => {
        if (!cancelled) setProgress({ p, label });
      });
      if (cancelled) return;
      rt.preflight(); // mostra a capa, como o projeto original ao carregar
      audio.warmUp();
      setSaved(snap);
      setPhase('ready');
    })().catch((e) => {
      console.error(e);
      if (!cancelled) {
        setError(String(e?.message ?? e));
        setPhase('error');
      }
    });
    return () => {
      cancelled = true;
    };
  }, [redraw]);

  useEffect(() => {
    if (phase === 'ready') redraw();
  }, [phase, size, redraw]);

  // Ao sair do app: pausa e salva o ponto onde o jogador parou. Ao voltar: pergunta se quer continuar.
  useEffect(() => {
    const sub = AppState.addEventListener('change', (st) => {
      if (phaseRef.current !== 'playing') return;
      if (st === 'active') {
        if (String(rt.G['in-game']) === 'true') setPausedDialog(true);
        else {
          audio.resumeAll();
          rt.start();
        }
      } else {
        rt.stop();
        audio.pauseAll();
        writeSnapshot(rt);
      }
    });
    return () => sub.remove();
  }, []);

  const start = useCallback(
    (snap?: Snapshot) => {
      rt.onFrame = redraw;
      if (snap) resumeGame(rt, snap);
      else rt.greenFlag();
      rt.start();
      setSaved(null);
      setPhase('playing');
    },
    [redraw],
  );

  const continueAfterBackground = () => {
    setPausedDialog(false);
    audio.resumeAll();
    rt.start();
  };
  const quitToMenu = () => {
    setPausedDialog(false);
    clearSnapshot();
    audio.resumeAll();
    rt.greenFlag();
    rt.start();
  };

  // ---------------------------------------------------------- multitoque
  const geom = useMemo(() => {
    const vw = rt.viewW;
    const k = Math.min(size.w / vw, size.h / STAGE_H) || 1;
    return { k, ox: (size.w - vw * k) / 2, oy: (size.h - STAGE_H * k) / 2, vw };
  }, [size]);
  // No Android/iOS o toque traz locationX/locationY (relativos à camada de toque);
  // na web (react-native-web) só vem clientX/clientY, então converto pelo retângulo do elemento.
  const toStage = (t: { locationX?: number; locationY?: number; clientX?: number; clientY?: number }, el: unknown) => {
    let lx = t.locationX;
    let ly = t.locationY;
    if (lx === undefined || ly === undefined) {
      const r = (el as { getBoundingClientRect?: () => { left: number; top: number } })?.getBoundingClientRect?.();
      lx = (t.clientX ?? 0) - (r?.left ?? 0);
      ly = (t.clientY ?? 0) - (r?.top ?? 0);
    }
    return { x: (lx - geom.ox) / geom.k - geom.vw / 2, y: STAGE_H / 2 - (ly - geom.oy) / geom.k };
  };
  const onTouchStart = (e: GestureResponderEvent) => {
    if (phase !== 'playing') return;
    for (const t of e.nativeEvent.changedTouches) {
      const p = toStage(t, e.currentTarget);
      rt.pointerDown(Number(t.identifier), p.x, p.y);
    }
  };
  const onTouchMove = (e: GestureResponderEvent) => {
    if (phase !== 'playing') return;
    for (const t of e.nativeEvent.changedTouches) {
      const p = toStage(t, e.currentTarget);
      rt.pointerMove(Number(t.identifier), p.x, p.y);
    }
  };
  const onTouchEnd = (e: GestureResponderEvent) => {
    for (const t of e.nativeEvent.changedTouches) rt.pointerUp(Number(t.identifier));
  };

  const onLayout = (e: LayoutChangeEvent) => {
    // com o teclado aberto (digitando código) o Android pode encolher a área: ignora, para o jogo não "pular"
    if (askRef.current !== null) return;
    const { width, height } = e.nativeEvent.layout;
    if (width <= 0 || height <= 0) return;
    // tela cheia: a altura do palco (360) preenche a altura; a largura visível cresce com a proporção da tela
    rt.setViewWidth(width / height >= STAGE_W / STAGE_H ? (STAGE_H * width) / height : STAGE_W);
    setSize({ w: width, h: height });
  };

  return (
    <View style={styles.root} onLayout={onLayout}>
      <StatusBar hidden />
      {size.w > 0 && (
        <Canvas style={StyleSheet.absoluteFill} pointerEvents="none">
          {picture && <Picture picture={picture} />}
        </Canvas>
      )}
      {/* camada única que recebe TODOS os dedos (cada dedo vira um "mouse" independente) */}
      <View
        style={StyleSheet.absoluteFill}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      />
      {phase !== 'playing' && (
        <View style={[styles.overlay, phase === 'ready' && styles.overlayReady]} pointerEvents="box-none">
          <Text style={styles.title}>Sobrevivência Máxima</Text>
          {phase === 'loading' && (
            <>
              <View style={styles.bar}>
                <View style={[styles.barFill, { width: `${Math.round(progress.p * 100)}%` }]} />
              </View>
              <Text style={styles.sub}>
                {progress.label}… {Math.round(progress.p * 100)}%
              </Text>
            </>
          )}
          {phase === 'ready' && saved && (
            <View style={styles.dialog}>
              <Text style={styles.dialogTitle}>Continuar partida?</Text>
              <Text style={styles.sub}>
                Você parou com {saved.kills} abates e {saved.souls} almas.
              </Text>
              <View style={styles.row}>
                <Pressable style={styles.play} onPress={() => start(saved)}>
                  <Text style={styles.playText}>Continuar</Text>
                </Pressable>
                <Pressable
                  style={styles.secondary}
                  onPress={() => {
                    clearSnapshot();
                    setSaved(null);
                  }}
                >
                  <Text style={styles.secondaryText}>Nova partida</Text>
                </Pressable>
              </View>
            </View>
          )}
          {phase === 'ready' && !saved && (
            <>
              <Pressable style={styles.play} onPress={() => start()}>
                <Text style={styles.playText}>Toque para jogar</Text>
              </Pressable>
              <Text style={styles.sub}>Versão mobile · 100% offline</Text>
            </>
          )}
          {phase === 'error' && <Text style={styles.sub}>Erro ao carregar: {error}</Text>}
        </View>
      )}
      {pausedDialog && (
        <View style={[styles.overlay, styles.overlayReady]}>
          <View style={styles.dialog}>
            <Text style={styles.dialogTitle}>Continuar partida?</Text>
            <Text style={styles.sub}>Sua partida está salva e pausada.</Text>
            <View style={styles.row}>
              <Pressable style={styles.play} onPress={continueAfterBackground}>
                <Text style={styles.playText}>Continuar</Text>
              </Pressable>
              <Pressable style={styles.secondary} onPress={quitToMenu}>
                <Text style={styles.secondaryText}>Ir para o menu</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
      {ask !== null && (
        <View style={styles.askWrap} pointerEvents="box-none">
          <View style={styles.ask}>
            <Text style={styles.askLabel}>{ask || 'Digite o código:'}</Text>
            <TextInput
              style={styles.askInput}
              value={askText}
              onChangeText={setAskText}
              autoFocus
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              onSubmitEditing={() => rt.submitAnswer(askText)}
            />
            <Pressable style={styles.askBtn} onPress={() => rt.submitAnswer(askText)}>
              <Text style={styles.askBtnText}>OK</Text>
            </Pressable>
            <Pressable style={styles.askCancel} onPress={() => rt.submitAnswer('')}>
              <Text style={styles.askCancelText}>Cancelar</Text>
            </Pressable>
          </View>
          <Text style={styles.askHint}>
            Um código usado só funciona em 1 partida: digite de novo se quiser usá-lo outra vez.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#000' },
  overlay: {
    position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(11,11,16,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  overlayReady: { backgroundColor: 'rgba(11,11,16,0.55)' },
  title: { color: '#fff', fontSize: 34, fontWeight: '700' },
  sub: { color: '#bbb', fontSize: 14 },
  bar: { width: 260, height: 8, borderRadius: 4, backgroundColor: '#2a2a35', overflow: 'hidden' },
  barFill: { height: 8, backgroundColor: '#ffd23f' },
  play: { backgroundColor: '#ffd23f', paddingHorizontal: 34, paddingVertical: 14, borderRadius: 12 },
  playText: { color: '#111', fontSize: 20, fontWeight: '700' },
  dialog: { alignItems: 'center', gap: 14 },
  dialogTitle: { color: '#fff', fontSize: 28, fontWeight: '700' },
  row: { flexDirection: 'row', gap: 14, marginTop: 4 },
  secondary: { borderColor: '#888', borderWidth: 2, paddingHorizontal: 26, paddingVertical: 12, borderRadius: 12 },
  secondaryText: { color: '#ddd', fontSize: 18, fontWeight: '600' },
  askWrap: { position: 'absolute', top: 8, left: 0, right: 0, alignItems: 'center', gap: 6 },
  ask: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  askHint: { color: '#333', backgroundColor: 'rgba(255,255,255,0.92)', fontSize: 11, paddingHorizontal: 10, paddingVertical: 3, borderRadius: 6 },
  askCancel: { paddingHorizontal: 10, paddingVertical: 8 },
  askCancelText: { color: '#777', fontWeight: '600' },
  askLabel: { color: '#575e75', fontSize: 15 },
  askInput: { minWidth: 180, borderWidth: 1, borderColor: '#999', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 4, fontSize: 16 },
  askBtn: { backgroundColor: '#4c97ff', borderRadius: 6, paddingHorizontal: 16, paddingVertical: 8 },
  askBtnText: { color: '#fff', fontWeight: '700' },
});
