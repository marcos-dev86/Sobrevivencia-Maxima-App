// GERADO por tools/transpile.mjs a partir de "talkbox animation" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setXY(139, 47);
      t.setSize(79);
      rt.goToLayer(t, "front");
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "store close" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "store open" },
    fn: function* (t, th) {
      t.setCostume("hello1");
      yield* rt.wait("0.17");
      t.show();
      for (let n = Math.round(4); n > 0; n--) {
        yield* rt.wait("0.03");
        t.nextCostume();
        yield LOOP;
      }
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "bought" },
    fn: function* (t, th) {
      t.setXY(139, 47);
      t.setCostume("bought1");
      t.show();
      for (let n = Math.round(2); n > 0; n--) {
        t.nextCostume();
        yield* rt.wait("0.03");
        yield LOOP;
      }
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "Max" },
    fn: function* (t, th) {
      t.setXY(120, 47);
      t.setCostume("...1");
      t.show();
      yield* rt.wait("0.3");
      t.setCostume("...2");
      yield* rt.wait("0.3");
      t.hide();
      t.setXY(139, 47);
    },
  },
  {
    hat: { k: "broadcast", name: "can´t afford" },
    fn: function* (t, th) {
      t.setXY(120, 47);
      t.setCostume("...1");
      t.show();
      yield* rt.wait("0.3");
      t.setCostume("...2");
      yield* rt.wait("0.3");
      t.hide();
      t.setXY(139, 47);
    },
  },
  {
    hat: { k: "broadcast", name: "power max" },
    fn: function* (t, th) {
      t.setXY(120, 47);
      t.setCostume("...1");
      t.show();
      yield* rt.wait("0.3");
      t.setCostume("...2");
      yield* rt.wait("0.3");
      t.hide();
      t.setXY(139, 47);
    },
  },
];
