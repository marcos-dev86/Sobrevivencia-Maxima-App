// GERADO por tools/transpile.mjs a partir de "page changer up" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "go to achievments" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (let n = Math.round(2); n > 0; n--) {
        t.hide();
        yield LOOP;
      }
      t.setXY(206, 151);
      t.setCostume("locked");
      for (;;) {
        if (!eq(G["achiev page"], "2")) {
          if (eq(G["achievPageOpen"], "true")) {
            t.show();
          }
        } else {
          t.hide();
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      G["achiev page"] = num(G["achiev page"]) + 1;
    },
  },
];
