// GERADO por tools/transpile.mjs a partir de "p health" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

// definir position bar (sem atualizar a tela)
function* proc0(t: Target, th: Thread): Generator<number, void, void> {
  t.goTo("player", th);
  t.changeY(35);
  t.v["bar %"] = (num(G["health"]) / num(t.v["hp max"]));
  t.setEffect("COLOR", (num(t.v["bar %"]) * 50));
}

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 13, "forward");
      t.hide();
      t.setCostume("base");
      t.v["hp max"] = "100";
      rt.createClone(t);
      t.setCostume("full");
      for (;;) {
        t.setCostume("big [shot]");
        yield* proc0(t, th);
        if (lt(t.v["bar %"], "0.5")) {
          t.setCostume("empty");
        } else {
          t.setCostume("full");
        }
        t.v["bar width"] = (46 * (t.sizeRounded / 100));
        t.changeX((num(t.v["bar width"]) * num(t.v["bar %"])));
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.show();
      t.setCostume("base");
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "koc attack" },
    fn: function* (t, th) {
      if (eq(G["koc mobile active"], "true")) {
        t.hide();
        yield* rt.wait("0.1");
        t.show();
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
    hat: { k: "clone" },
    fn: function* (t, th) {
      for (;;) {
        yield* proc0(t, th);
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (gt(t.v["bar %"], "1")) {
          G["health"] = "100";
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "pause off" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "pause" },
    fn: function* (t, th) {
      t.hide();
    },
  },
];
