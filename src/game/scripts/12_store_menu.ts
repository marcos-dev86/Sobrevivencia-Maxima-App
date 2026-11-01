// GERADO por tools/transpile.mjs a partir de "store menu" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 15, "forward");
      t.setCostume("normal");
      t.setXY(-181, 57);
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
    hat: { k: "broadcast", name: "store close" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      for (;;) {
        if (eq(G["kingofcuts"], "true")) {
          t.setCostume("koc");
        }
        if ((eq(G["kingofcuts"], "false") && eq(G["batonly"], "true"))) {
          t.setCostume("swordonly");
        }
        if ((eq(G["kingofcuts"], "false") && eq(G["batonly"], "false"))) {
          t.setCostume("normal");
        }
        if ((eq(G["kingofcuts"], "false") && (eq(G["batonly"], "false") && eq(G["NoCooldown"], "true")))) {
          t.setCostume("nocooldown");
        }
        yield LOOP;
      }
    },
  },
];
