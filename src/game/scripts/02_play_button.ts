// GERADO por tools/transpile.mjs a partir de "play button" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      G["Almas"] = "0";
      rt.setMonitorVisible("Almas", false);
      t.setXY(-2, -48);
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      t.hide();
      rt.broadcast("transition", th);
      G["derrubadas com o bastão"] = "0";
      G["derrubadas com o arco"] = "0";
      G["derrubadas totais"] = "0";
      G["Big Hammer"] = "false";
      G["md bow"] = "false";
      G["cur-ava"] = "false";
      G["Soul Dash"] = "false";
      G["walkspeed"] = "3";
      G["shoot speed"] = "0.40";
      G["dash distance"] = "25";
      G["store open"] = "false";
      yield* rt.wait("1");
      rt.broadcast("Start", th);
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
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.hide();
      rt.stage.setCostume("game");
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
    hat: { k: "broadcast", name: "go to menu" },
    fn: function* (t, th) {
      rt.stage.setCostume("main menu");
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "go to achievments" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "stop" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      G["health"] = "100";
      G["Almas"] = "0";
      G["in-game"] = "true";
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "skins page" },
    fn: function* (t, th) {
      t.hide();
    },
  },
];
