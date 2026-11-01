// GERADO por tools/transpile.mjs a partir de "koc hitbox" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "koc attack" },
    fn: function* (t, th) {
      if (eq(G["koc mobile active"], "false")) {
        t.setRotationStyle("all around");
        t.setCostume("pc");
        t.show();
        t.playSound("dismantle-made-with-Voicemod");
        t.goTo("player", th);
        t.pointTowards("_mouse_", th);
        yield* t.glideTo("0.1", "_mouse_", th);
        t.hide();
      } else {
        rt.setMonitorVisible("Almas", false);
        t.setCostume("mobile");
        t.goToScreen(0, 0);
        t.show();
        t.playSound("dismantle-made-with-Voicemod");
        yield* rt.wait("0.2");
        rt.setMonitorVisible("Almas", true);
        t.hide();
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setDirection(0);
      G["koc mobile active"] = "false";
      t.hide();
      rt.goToLayer(t, "back");
    },
  },
  {
    hat: { k: "broadcast", name: "mobile mode" },
    fn: function* (t, th) {
      G["koc mobile active"] = "true";
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (t.touching("zombie3", th)) {
          rt.broadcast("respawn z3", th);
          rt.broadcast("+1 alma", th);
        }
        if (t.touching("zombie2", th)) {
          rt.broadcast("respawn z2", th);
          rt.broadcast("+1 alma", th);
        }
        if (t.touching("zombie", th)) {
          rt.broadcast("respawn z", th);
          rt.broadcast("+1 alma", th);
        }
        if (t.touching("zombie knight", th)) {
          rt.broadcast("respawn armored", th);
          rt.broadcast("+2 almass", th);
        }
        if (t.touching("boss brute", th)) {
          G["Brute health"] = "0";
        }
        yield LOOP;
      }
    },
  },
];
