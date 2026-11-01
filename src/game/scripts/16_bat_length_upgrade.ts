// GERADO por tools/transpile.mjs a partir de "bat length upgrade" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 16, "forward");
      t.setXY(-180, 47);
      t.hide();
      for (;;) {
        rt.goToLayer(t, "front");
        if (lt(t.sizeRounded, "45")) {
          t.setSize(t.size + 5);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setSize(50);
      for (;;) {
        if (gt(t.sizeRounded, "50")) {
          t.setSize(t.size + -5);
        }
        yield LOOP;
      }
    },
  },
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
    hat: { k: "broadcast", name: "store open" },
    fn: function* (t, th) {
      if (eq(G["kingofcuts"], "false")) {
        t.show();
      }
    },
  },
  {
    hat: { k: "broadcast", name: "store close" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      rt.broadcast("size up", th);
    },
  },
  {
    hat: { k: "broadcast", name: "size up" },
    fn: function* (t, th) {
      if (eq(G["sword htbx Size"], "40")) {
        t.setCostume("25");
      }
      if (eq(G["sword htbx Size"], "45")) {
        t.setCostume("40");
      }
      if (eq(G["sword htbx Size"], "50")) {
        t.setCostume("máx");
      }
    },
  },
  {
    hat: { k: "broadcast", name: "size reset" },
    fn: function* (t, th) {
      t.setCostume("15");
    },
  },
];
