// GERADO por tools/transpile.mjs a partir de "skins button" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
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
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setCostume("skins");
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
      t.v["skins open"] = "false";
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "go to menu" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "transition" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "stop" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      if (eq(t.v["skins open"], "false")) {
        t.v["skins open"] = "true";
        t.setCostume("sair");
        rt.broadcast("skins page", th);
      } else {
        t.v["skins open"] = "false";
        t.setCostume("skins");
        rt.broadcast("back to menu", th);
      }
    },
  },
  {
    hat: { k: "broadcast", name: "go to achievments" },
    fn: function* (t, th) {
      t.hide();
    },
  },
];
