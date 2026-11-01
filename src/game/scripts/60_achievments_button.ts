// GERADO por tools/transpile.mjs a partir de "achievments button" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.setMonitorVisible("achiev page", false);
      G["achievPageOpen"] = "false";
      t.setXY(-50, -100);
      t.setCostume("conquistas");
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
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      rt.broadcast("go to achievments", th);
      if (eq(G["achievPageOpen"], "false")) {
        t.setXY(177, 76);
        rt.stage.setCostume("game");
        t.setCostume("sair");
        rt.setMonitorVisible("achiev page", true);
        G["achievPageOpen"] = "true";
        G["achiev page"] = "1";
      } else {
        t.setXY(-50, -100);
        rt.broadcast("back to menu", th);
        t.setCostume("conquistas");
        rt.stage.setCostume("main menu");
        G["achievPageOpen"] = "false";
        rt.setMonitorVisible("achiev page", false);
      }
    },
  },
  {
    hat: { k: "broadcast", name: "info" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "X info" },
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
    hat: { k: "broadcast", name: "stop" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (t.touching("_mouse_", th)) {
          yield* t.sayFor("É aqui que você vê as conquistas, certas conquistas revelam códigos.", "0.01");
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "skins page" },
    fn: function* (t, th) {
      t.hide();
    },
  },
];
