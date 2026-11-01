// GERADO por tools/transpile.mjs a partir de "cooldown dash mobile blocker" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.goTo("dash button", th);
      t.v["clicks"] = "0";
      rt.goToLayer(t, "front");
      t.clearEffects();
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
    hat: { k: "broadcast", name: "dash" },
    fn: function* (t, th) {
      if ((eq(G["mobile mode"], "true") && eq(G["Soul Dash"], "false"))) {
        t.show();
        yield* rt.wait("3");
        t.hide();
      }
    },
  },
  {
    hat: { k: "broadcast", name: "dash" },
    fn: function* (t, th) {
      if ((eq(G["mobile mode"], "true") && eq(G["Soul Dash"], "true"))) {
        t.v["clicks"] = num(t.v["clicks"]) + 1;
        if (gt(t.v["clicks"], "2")) {
          t.v["clicks"] = "0";
          t.show();
          yield* rt.wait("3");
          t.hide();
        }
      }
    },
  },
];
