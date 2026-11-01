// GERADO por tools/transpile.mjs a partir de "back to the loby" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (lt(t.sizeRounded, "85")) {
          t.setSize(t.size + 5);
        }
        if (gt(t.sizeRounded, "90")) {
          t.setSize(t.size + -5);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      G["in-game"] = "false";
      G["health"] = "0";
      t.setXY(0, -140);
      t.hide();
      for (;;) {
        if (t.touching("_mouse_", th)) {
          t.setSize(t.size + 5);
        } else {
          t.setSize(t.size + -5);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      rt.audio.stopAll();
      G["health"] = "0";
      rt.broadcast("size reset", th);
      rt.setMonitorVisible("derrubadas com o bastão", false);
      rt.setMonitorVisible("derrubadas com o arco", false);
      rt.setMonitorVisible("derrubadas totais", false);
      rt.setMonitorVisible("Almas", false);
      rt.broadcast("back to menu", th);
      G["boss speed"] = "0.5";
      G["z speed"] = "1";
      rt.stage.setCostume("main menu");
    },
  },
  {
    hat: { k: "broadcast", name: "pause" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "show bat kills" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "pause off" },
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
