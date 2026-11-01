// GERADO por tools/transpile.mjs a partir de "screen color" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "pause" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 17, "forward");
      t.setEffect("GHOST", 50);
      t.setCostume("pause box");
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "pause off" },
    fn: function* (t, th) {
      t.clearEffects();
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 17, "forward");
      t.hide();
      t.setXY(0, 0);
      t.setEffect("GHOST", 50);
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
      rt.goToLayer(t, "back");
      rt.goLayers(t, 17, "forward");
      t.setEffect("GHOST", 50);
    },
  },
  {
    hat: { k: "broadcast", name: "transition" },
    fn: function* (t, th) {
      t.setCostume("loading box");
      t.show();
      t.setEffect("GHOST", 100);
      for (let n = Math.round(10); n > 0; n--) {
        t.changeEffect("GHOST", -10);
        yield LOOP;
      }
      t.setEffect("GHOST", 0);
      yield* rt.wait("0.6");
      for (let n = Math.round(10); n > 0; n--) {
        t.changeEffect("GHOST", 10);
        yield LOOP;
      }
      t.hide();
      t.clearEffects();
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      t.setCostume("loading box");
      t.show();
    },
  },
];
