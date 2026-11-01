// GERADO por tools/transpile.mjs a partir de "talkbox" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "store close" },
    fn: function* (t, th) {
      for (let n = Math.round(6); n > 0; n--) {
        t.setSize(t.size + -10);
        yield LOOP;
      }
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "store open" },
    fn: function* (t, th) {
      t.setSize(0);
      t.setCostume("empty");
      t.show();
      for (let n = Math.round(6); n > 0; n--) {
        t.setSize(t.size + 10);
        yield LOOP;
      }
      t.setCostume("hello");
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "front");
      rt.goLayers(t, 1, "backward");
      t.setXY(139, 47);
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.setCostume("hello");
    },
  },
  {
    hat: { k: "broadcast", name: "bought" },
    fn: function* (t, th) {
      t.setCostume("buy");
      for (let n = Math.round(5); n > 0; n--) {
        t.playSound("talk");
        yield* rt.wait("0.03");
        yield LOOP;
      }
      yield* rt.wait("0.91");
      t.setCostume("hello");
    },
  },
  {
    hat: { k: "broadcast", name: "Max" },
    fn: function* (t, th) {
      t.setCostume("fail");
      for (let n = Math.round(3); n > 0; n--) {
        t.playSound("talk");
        yield* rt.wait("0.3");
        yield LOOP;
      }
      yield* rt.wait("0.1");
      t.setCostume("hello");
    },
  },
  {
    hat: { k: "broadcast", name: "can´t afford" },
    fn: function* (t, th) {
      t.setCostume("fail");
      for (let n = Math.round(3); n > 0; n--) {
        t.playSound("talk");
        yield* rt.wait("0.3");
        yield LOOP;
      }
      yield* rt.wait("0.1");
      t.setCostume("hello");
    },
  },
  {
    hat: { k: "broadcast", name: "power max" },
    fn: function* (t, th) {
      t.setCostume("fail");
      for (let n = Math.round(3); n > 0; n--) {
        t.playSound("talk");
        yield* rt.wait("0.3");
        yield LOOP;
      }
      yield* rt.wait("0.1");
      t.setCostume("hello");
    },
  },
  {
    hat: { k: "broadcast", name: "store open" },
    fn: function* (t, th) {
      for (let n = Math.round(7); n > 0; n--) {
        t.playSound("talk");
        yield* rt.wait("0.03");
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.hide();
    },
  },
];
