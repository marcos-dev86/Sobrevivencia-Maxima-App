// GERADO por tools/transpile.mjs a partir de "selected skin" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "stop" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "skins page" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.hide();
      for (;;) {
        if (eq(G["selected skin"], "old jack")) {
          t.setCostume("old jack");
        } else {
          t.setCostume("jack");
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "skin change" },
    fn: function* (t, th) {
      t.setEffect("GHOST", 100);
      for (let n = Math.round(10); n > 0; n--) {
        t.changeEffect("GHOST", -10);
        yield LOOP;
      }
    },
  },
];
