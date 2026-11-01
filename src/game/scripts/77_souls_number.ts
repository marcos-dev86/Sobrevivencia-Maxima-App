// GERADO por tools/transpile.mjs a partir de "souls number" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 9, "forward");
      t.hide();
      for (;;) {
        if (gt(G["Almas"], "9999")) {
          G["Almas"] = "9999";
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.setXY(-195, 161);
      t.v["index"] = "1";
      for (let n = Math.round(4); n > 0; n--) {
        rt.createClone(t);
        t.changeX((t.sizeRounded / 2));
        t.v["index"] = num(t.v["index"]) + 1;
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "clone" },
    fn: function* (t, th) {
      t.show();
      for (;;) {
        t.setCostume(join("soul-", letterOf(t.v["index"], G["Almas"])));
        if (eq(G["in-game"], "false")) {
          if (rt.deleteThisClone(t)) return;
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      G["in-game"] = "false";
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      G["in-game"] = "false";
    },
  },
];
