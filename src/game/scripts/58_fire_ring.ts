// GERADO por tools/transpile.mjs a partir de "fire ring" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "boss time2" },
    fn: function* (t, th) {
      t.show();
      G["fire ring off"] = "false";
      t.show();
      for (;;) {
        if (gt(G["transfigured health"], "0")) {
          t.goTo("boss trans", th);
        } else {
          t.setCostume("disappear");
          t.hide();
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "boss spikes" },
    fn: function* (t, th) {
      G["fire ring off"] = "true";
      t.setCostume("disappear");
      yield* rt.wait("0.2");
      t.hide();
      yield* rt.wait("1.7");
      if (gt(G["health"], "0")) {
        if (gt(G["transfigured health"], "0")) {
          t.setCostume("1");
          t.show();
          yield* rt.wait("0.1");
          G["fire ring off"] = "false";
        }
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      t.hide();
      for (;;) {
        if (eq(G["fire ring off"], "false")) {
          if (gt(G["z speed"], "0")) {
            t.setCostume("1");
            yield* rt.wait("0.07");
            t.setCostume("2");
            yield* rt.wait("0.07");
          }
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      for (let n = Math.round(50); n > 0; n--) {
        t.hide();
        yield LOOP;
      }
    },
  },
];
