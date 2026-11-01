// GERADO por tools/transpile.mjs a partir de "info texts" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "can´t afford" },
    fn: function* (t, th) {
      t.setCostume("Can´t");
      t.show();
      yield* rt.wait("1");
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "Max" },
    fn: function* (t, th) {
      t.setCostume("Max");
      t.show();
      yield* rt.wait("1");
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "bought" },
    fn: function* (t, th) {
      t.setCostume("Bought");
      t.show();
      yield* rt.wait("1");
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "code yes" },
    fn: function* (t, th) {
      t.setCostume("Code Used");
      t.show();
      yield* rt.wait("1");
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "power max" },
    fn: function* (t, th) {
      t.setCostume("power max");
      t.show();
      yield* rt.wait("1");
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "code not on mobile" },
    fn: function* (t, th) {
      t.setCostume("code not on mobile");
      t.show();
      yield* rt.wait("1");
      t.hide();
    },
  },
];
