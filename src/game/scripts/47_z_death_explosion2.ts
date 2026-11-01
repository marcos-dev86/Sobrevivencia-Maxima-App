// GERADO por tools/transpile.mjs a partir de "z death explosion2" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "z dead2" },
    fn: function* (t, th) {
      t.setEffect("GHOST", 0);
      t.setCostume("1");
      t.goTo("zombie2", th);
      t.show();
      for (let n = Math.round(2); n > 0; n--) {
        yield* rt.wait("0.1");
        t.nextCostume();
        yield LOOP;
      }
      yield* rt.wait("1");
      for (let n = Math.round(3); n > 0; n--) {
        t.changeEffect("GHOST", 25);
        yield LOOP;
      }
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      t.hide();
    },
  },
];
