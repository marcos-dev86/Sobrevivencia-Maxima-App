// GERADO por tools/transpile.mjs a partir de "boss apear " — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "boss time" },
    fn: function* (t, th) {
      G["store open"] = "true";
      G["z speed"] = "0";
      G["boss speed"] = "0";
      t.setCostume("start");
      t.show();
      t.setEffect("GHOST", 100);
      for (let n = Math.round(5); n > 0; n--) {
        t.changeEffect("GHOST", -20);
        yield* rt.wait("0.1");
        t.nextCostume();
        yield LOOP;
      }
      t.setCostume("brute appear");
      t.playSound("boss appear");
      t.clearEffects();
      yield* rt.wait("2");
      for (let n = Math.round(5); n > 0; n--) {
        t.changeEffect("GHOST", 20);
        yield LOOP;
      }
      G["z speed"] = "1";
      G["boss speed"] = "0.5";
      G["store open"] = "false";
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "front");
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "boss time2" },
    fn: function* (t, th) {
      G["store open"] = "true";
      G["z speed"] = "0";
      G["boss speed"] = "0";
      t.setCostume("start");
      t.show();
      t.setEffect("GHOST", 100);
      for (let n = Math.round(5); n > 0; n--) {
        t.nextCostume();
        t.changeEffect("GHOST", -20);
        yield* rt.wait("0.1");
        yield LOOP;
      }
      t.setCostume("transfigured appear");
      t.playSound("boss appear");
      t.clearEffects();
      yield* rt.wait("2");
      for (let n = Math.round(5); n > 0; n--) {
        t.changeEffect("GHOST", 20);
        yield LOOP;
      }
      G["z speed"] = "1";
      G["boss speed"] = "0.5";
      G["store open"] = "false";
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "boss time3" },
    fn: function* (t, th) {
      G["store open"] = "true";
      G["z speed"] = "0";
      G["boss speed"] = "0";
      t.setCostume("start");
      t.show();
      t.setEffect("GHOST", 100);
      for (let n = Math.round(5); n > 0; n--) {
        t.nextCostume();
        t.changeEffect("GHOST", -20);
        yield* rt.wait("0.1");
        yield LOOP;
      }
      t.setCostume("hipnotiser appear");
      t.playSound("boss appear");
      t.clearEffects();
      yield* rt.wait("2");
      for (let n = Math.round(5); n > 0; n--) {
        t.changeEffect("GHOST", 20);
        yield LOOP;
      }
      G["z speed"] = "1";
      G["boss speed"] = "0.5";
      G["store open"] = "false";
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "boss time3" },
    fn: function* (t, th) {
      yield* t.playSoundUntilDone("Dança da Sereia");
      t.setVolume(0);
      yield* rt.wait("2.5");
      for (let n = Math.round(10); n > 0; n--) {
        t.setVolume(t.volume + 10);
        yield* rt.wait("0.1");
        yield LOOP;
      }
      while (!eq(G["hipno health"], "0")) {
        if (!eq(G["health"], "0")) {
          yield* t.playSoundUntilDone("O mais próximo de nós se foi");
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "boss time" },
    fn: function* (t, th) {
      while (!lt(G["Brute health"], "1")) yield WAIT;
      for (let n = Math.round(10); n > 0; n--) {
        t.setVolume(t.volume + -10);
        yield* rt.wait("0.1");
        yield LOOP;
      }
      rt.audio.stopAll();
      t.setVolume(100);
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      for (let n = Math.round(10); n > 0; n--) {
        t.setVolume(t.volume + -10);
        yield* rt.wait("0.1");
        yield LOOP;
      }
      rt.audio.stopAll();
      t.setVolume(100);
    },
  },
  {
    hat: { k: "broadcast", name: "boss time" },
    fn: function* (t, th) {
      yield* t.playSoundUntilDone("Pura Força Bruta");
      t.setVolume(0);
      yield* rt.wait("2.5");
      for (let n = Math.round(10); n > 0; n--) {
        t.setVolume(t.volume + 10);
        yield* rt.wait("0.1");
        yield LOOP;
      }
      yield* rt.wait("206");
      while (!eq(G["Brute health"], "0")) {
        if (!eq(G["health"], "0")) {
          yield* t.playSoundUntilDone("Pura Força Bruta");
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "boss time2" },
    fn: function* (t, th) {
      while (!lt(G["transfigured health"], "1")) yield WAIT;
      for (let n = Math.round(10); n > 0; n--) {
        t.setVolume(t.volume + -10);
        yield* rt.wait("0.1");
        yield LOOP;
      }
      rt.audio.stopAll();
      t.setVolume(100);
    },
  },
  {
    hat: { k: "broadcast", name: "boss time3" },
    fn: function* (t, th) {
      while (!lt(G["hipno health"], "1")) yield WAIT;
      for (let n = Math.round(10); n > 0; n--) {
        t.setVolume(t.volume + -10);
        yield* rt.wait("0.1");
        yield LOOP;
      }
      rt.audio.stopAll();
      t.setVolume(100);
    },
  },
  {
    hat: { k: "broadcast", name: "boss time2" },
    fn: function* (t, th) {
      yield* t.playSoundUntilDone("O mais próximo de nós se foi");
      t.setVolume(0);
      yield* rt.wait("2.5");
      for (let n = Math.round(10); n > 0; n--) {
        t.setVolume(t.volume + 10);
        yield* rt.wait("0.1");
        yield LOOP;
      }
      while (!eq(G["transfigured health"], "0")) {
        if (!eq(G["health"], "0")) {
          yield* t.playSoundUntilDone("O mais próximo de nós se foi");
        }
        yield LOOP;
      }
    },
  },
];
