// GERADO por tools/transpile.mjs a partir de "skin change effect" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "skin change" },
    fn: function* (t, th) {
      rt.createClone(t);
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
    hat: { k: "clone" },
    fn: function* (t, th) {
      t.setXY(-108, 3);
      t.playSound("Skin change");
      t.show();
      t.setCostume("1");
      yield* rt.wait("0.05");
      t.setCostume("2");
      yield* rt.wait("0.05");
      t.setCostume("3");
      yield* rt.wait("0.05");
      t.setCostume("4");
      yield* rt.wait("0.05");
      for (let n = Math.round(5); n > 0; n--) {
        t.changeEffect("GHOST", 20);
        yield LOOP;
      }
      if (rt.deleteThisClone(t)) return;
    },
  },
];
