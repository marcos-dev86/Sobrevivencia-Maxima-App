// GERADO por tools/transpile.mjs a partir de "hipno laser" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      G["Laser On"] = "false";
      t.clearEffects();
      t.hide();
      t.setEffect("GHOST", 70);
      for (;;) {
        t.goTo("boss hipnotiser", th);
        t.changeY(25);
        t.pointTowards("player", th);
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "laser cancel" },
    fn: function* (t, th) {
      G["Laser On"] = "false";
      for (let n = Math.round(14); n > 0; n--) {
        t.changeEffect("GHOST", 5);
        yield LOOP;
      }
      t.hide();
      G["boss speed"] = "0.5";
    },
  },
  {
    hat: { k: "broadcast", name: "Boss attack animation start" },
    fn: function* (t, th) {
      G["Laser On"] = "true";
      yield* rt.wait("0.7");
      t.show();
      t.setEffect("GHOST", 100);
      for (let n = Math.round(14); n > 0; n--) {
        t.changeEffect("GHOST", -5);
        yield LOOP;
      }
      if (!t.touching("player", th)) {
        yield* rt.wait("1");
        if (!t.touching("player", th)) {
          rt.broadcast("laser cancel", th);
          for (let n = Math.round(14); n > 0; n--) {
            t.changeEffect("GHOST", 5);
            yield LOOP;
          }
          t.hide();
          G["boss speed"] = "0.5";
          return;
        }
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
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
    },
  },
];
