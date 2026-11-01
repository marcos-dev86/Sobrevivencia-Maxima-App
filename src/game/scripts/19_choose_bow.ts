// GERADO por tools/transpile.mjs a partir de "choose bow" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      if ((eq(G["kingofcuts"], "false") && eq(G["batonly"], "false"))) {
        rt.broadcast("equip bow", th);
      }
    },
  },
  {
    hat: { k: "broadcast", name: "mobile mode" },
    fn: function* (t, th) {
      t.setCostume("unselected");
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "front");
      rt.goLayers(t, 1, "backward");
      t.setSize(70);
      t.hide();
      t.setXY(8, -142);
      for (;;) {
        if ((eq(G["kingofcuts"], "true") || eq(G["batonly"], "true"))) {
          t.setCostume("Blocked");
        } else {
          if (eq(G["bat equiped"], "true")) {
            t.setCostume("unselected");
          } else {
            t.setCostume("selected");
          }
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.show();
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
    hat: { k: "broadcast", name: "pause" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "pause off" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "clone" },
    fn: function* (t, th) {
      t.setCostume("clone");
      t.setEffect("GHOST", 70);
      for (let n = Math.round(10); n > 0; n--) {
        t.setSize(t.size + 6);
        t.changeEffect("GHOST", 3);
        yield LOOP;
      }
      if (rt.deleteThisClone(t)) return;
    },
  },
  {
    hat: { k: "broadcast", name: "equip bow" },
    fn: function* (t, th) {
      rt.createClone(t);
    },
  },
  {
    hat: { k: "key", key: "2" },
    fn: function* (t, th) {
      if (eq(G["in-game"], "true")) {
        rt.createClone(t);
      }
    },
  },
];
