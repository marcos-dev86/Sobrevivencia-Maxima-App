// GERADO por tools/transpile.mjs a partir de "boss death explosion" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "boss dead" },
    fn: function* (t, th) {
      t.setEffect("GHOST", 0);
      t.setCostume("1 default");
      t.goTo("boss brute", th);
      t.show();
      while (!eq(t.costumeNumberName("name"), "3 default")) {
        yield* rt.wait("0.1");
        t.nextCostume();
        yield LOOP;
      }
      yield* rt.wait("1");
      for (let n = Math.round(3); n > 0; n--) {
        t.changeEffect("GHOST", 25);
        yield LOOP;
      }
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "boss dead2" },
    fn: function* (t, th) {
      t.setEffect("GHOST", 0);
      t.setCostume("1 transfig");
      t.goTo("boss trans", th);
      t.show();
      while (!eq(t.costumeNumberName("name"), "3 transfig")) {
        yield* rt.wait("0.1");
        t.nextCostume();
        yield LOOP;
      }
      yield* rt.wait("1");
      for (let n = Math.round(3); n > 0; n--) {
        t.changeEffect("GHOST", 25);
        yield LOOP;
      }
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "boss dead 3" },
    fn: function* (t, th) {
      t.setEffect("GHOST", 0);
      t.setCostume("1 default");
      t.goTo("boss hipnotiser", th);
      t.show();
      while (!eq(t.costumeNumberName("name"), "3 default")) {
        yield* rt.wait("0.1");
        t.nextCostume();
        yield LOOP;
      }
      yield* rt.wait("1");
      for (let n = Math.round(3); n > 0; n--) {
        t.changeEffect("GHOST", 25);
        yield LOOP;
      }
      t.hide();
    },
  },
];
