// GERADO por tools/transpile.mjs a partir de "Soul dash buy" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 16, "forward");
      t.setXY(-59, 135);
      t.setSize(50);
      t.hide();
      G["Soul Dash"] = "false";
      for (;;) {
        if (lt(t.sizeRounded, "45")) {
          t.setSize(t.size + 5);
        }
        if (gt(t.sizeRounded, "50")) {
          t.setSize(t.size + -5);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (t.touching("_mouse_", th)) {
          t.setSize(t.size + 5);
        } else {
          t.setSize(t.size + -5);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      if (eq(G["Soul Dash"], "false")) {
        if (gt(G["Almas"], "24")) {
          G["Almas"] = num(G["Almas"]) + -25;
          G["Soul Dash"] = "true";
          t.setCostume("bougth");
          rt.broadcast("bought", th);
        } else {
          rt.broadcast("can´t afford", th);
        }
      } else {
        rt.broadcast("power max", th);
      }
    },
  },
  {
    hat: { k: "broadcast", name: "store close" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "store open" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (t.touching("_mouse_", th)) {
          yield* t.sayFor("Em vez do impulso normal, segure o botão e se torne uma Alma e  ganhe velocidade extra (Muda na versão mobile para ser 3 impulsos)", "0.1");
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.setCostume("25");
    },
  },
];
