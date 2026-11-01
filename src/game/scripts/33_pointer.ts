// GERADO por tools/transpile.mjs a partir de "pointer" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      t.hide();
      t.setXY(-174, -122);
    },
  },
  {
    hat: { k: "broadcast", name: "move now" },
    fn: function* (t, th) {
      for (let n = Math.round(1); n > 0; n--) {
        G["direction to move"] = t.direction;
        if (rt.mouseDown(th)) {
          t.pointTowards("_mouse_", th);
        }
        yield LOOP;
      }
    },
  },
];
