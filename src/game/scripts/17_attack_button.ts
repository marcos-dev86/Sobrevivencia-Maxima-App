// GERADO por tools/transpile.mjs a partir de "Attack button" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setXY(176, -144);
      rt.goToLayer(t, "back");
      rt.goLayers(t, 12, "forward");
      t.hide();
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      rt.broadcast("attack", th);
      if (eq(G["kingofcuts"], "true")) {
        rt.broadcast("koc attack", th);
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      if (eq(G["mobile mode"], "true")) {
        t.show();
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      if (eq(G["kingofcuts"], "true")) {
        t.setCostume("koc attack");
      } else {
        t.setCostume("sword  attack");
      }
    },
  },
  {
    hat: { k: "broadcast", name: "equip sword" },
    fn: function* (t, th) {
      if (eq(G["kingofcuts"], "true")) {
        t.setCostume("koc attack");
      } else {
        t.setCostume("sword  attack");
      }
    },
  },
  {
    hat: { k: "broadcast", name: "equip bow" },
    fn: function* (t, th) {
      if (eq(G["kingofcuts"], "false")) {
        t.setCostume("bow attack");
      }
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "koc attack" },
    fn: function* (t, th) {
      if (eq(G["koc mobile active"], "true")) {
        t.hide();
        yield* rt.wait("0.1");
        t.show();
      }
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "pause off" },
    fn: function* (t, th) {
      if (eq(G["mobile mode"], "true")) {
        t.show();
      }
    },
  },
  {
    hat: { k: "broadcast", name: "pause" },
    fn: function* (t, th) {
      t.hide();
    },
  },
];
