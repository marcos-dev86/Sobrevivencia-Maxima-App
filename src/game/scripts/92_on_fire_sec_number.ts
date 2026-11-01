// GERADO por tools/transpile.mjs a partir de "on fire sec number" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setCostume("soul-");
      rt.goToLayer(t, "front");
      t.setXY(214, 39);
      t.hide();
      t.v["index"] = "1";
      for (let n = Math.round(2); n > 0; n--) {
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
      for (;;) {
        t.setCostume(join("soul-", letterOf(t.v["index"], G["fire time"])));
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "on fire start" },
    fn: function* (t, th) {
      yield* rt.wait("0.4");
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "on fire stop" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      while (!eq(G["in-game"], "true")) {
        G["fire time"] = "0";
        t.hide();
        yield LOOP;
      }
    },
  },
];
