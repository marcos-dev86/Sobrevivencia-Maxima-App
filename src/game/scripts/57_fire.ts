// GERADO por tools/transpile.mjs a partir de "fire" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.hide();
      for (;;) {
        t.setCostume("1");
        yield* rt.wait("0.1");
        t.setCostume("2");
        yield* rt.wait("0.1");
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "boss spikes" },
    fn: function* (t, th) {
      yield* rt.wait("0.8");
      t.goTo("boss warning", th);
      t.setSize(10);
      t.show();
      while (!eq(t.sizeRounded, "60")) {
        t.setSize(t.size + 10);
        yield LOOP;
      }
      yield* rt.wait("1");
      while (!eq(t.sizeRounded, "10")) {
        t.setSize(t.size + -10);
        yield LOOP;
      }
      t.hide();
    },
  },
];
