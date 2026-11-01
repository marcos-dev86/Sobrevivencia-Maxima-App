// GERADO por tools/transpile.mjs — dados do projeto Scratch original.
import type { TargetDef } from '../engine/types';
import type { MonitorDef } from '../engine/runtime';

export const targets: TargetDef[] = [
 {
  "name": "Stage",
  "isStage": true,
  "costumes": [
   {
    "name": "main menu",
    "file": "b20a93350c539cc4c3a30666c0686c0b.svg",
    "ext": "svg",
    "rcx": 94.41015625,
    "rcy": 13.10714340209961,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 189.32144165039062,
    "h": 27.357139587402344
   },
   {
    "name": "game",
    "file": "14e46ec3e2ba471c2adfe8f119052307.svg",
    "ext": "svg",
    "rcx": 0,
    "rcy": 0,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 0,
    "h": 0
   },
   {
    "name": "tumbnail",
    "file": "41877a6676ba594bf6c97645c578311b.svg",
    "ext": "svg",
    "rcx": 221.00311499999998,
    "rcy": 205.50876334731382,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 449.1574401855469,
    "h": 366.03936767578125
   },
   {
    "name": "tumb 2",
    "file": "dd19a512ee6ad32e0baa48b8cf385db5.svg",
    "ext": "svg",
    "rcx": 223.717275,
    "rcy": 171.10081190461347,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 454.2027893066406,
    "h": 288.3470153808594
   },
   {
    "name": "tumb 3",
    "file": "27a55d70a77580874d97b858ad2a79a9.svg",
    "ext": "svg",
    "rcx": 161.99902761819993,
    "rcy": 171.10081,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 392.4845275878906,
    "h": 332.951171875
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "Almas": 1,
   "walkspeed": "3",
   "health": "100",
   "mobile starter": "1",
   "shooting": "0",
   "dash distance": "25",
   "shoot speed": "0.40",
   "shield chance 2": "0",
   "bat direction": 53.51578240435006,
   "derrubadas com o bastão": "0",
   "derrubadas com o arco": 1,
   "derrubadas totais": 1,
   "direction to move": -5.102165252358205,
   "shield chance 3": "0",
   "shield chance": 5,
   "z speed": "1",
   "player y": 0,
   "store open": "true",
   "hitbox": "false",
   "total souls": "0",
   "kingofcuts": "false",
   "boss speed": "0.5",
   "boss dead": "false",
   "bat equiped": "true",
   "koc mobile active": "false",
   "Big Hammer": "0",
   "mobile mode": "false",
   "batonly": "false",
   "z armor hp": "3",
   "boss atack": "false",
   "Brute health": "10",
   "md bow": "false",
   "transfigured health": 9,
   "fire ring off": "true",
   "achiev page": 1,
   "achievPageOpen": "false",
   "hipno health": 0,
   "Laser On": "false",
   "cur-ava": "false",
   "in-game": "false",
   "tip change time": "3",
   "bleeding": "false",
   "bleed time": "",
   "on fire": "false",
   "fire time": "",
   "Soul Dash": "false",
   "dashing": "false",
   "dash energy": "3",
   "selected skin": "jack",
   "NoCooldown": "false",
   "hipno direction": -43.90642494414843,
   "sword htbx Size": 40
  },
  "x": 0,
  "y": 0,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": true,
  "currentCostume": 4,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 0
 },
 {
  "name": "player",
  "isStage": false,
  "costumes": [
   {
    "name": "idle",
    "file": "5c2a0cd9cdd75a2d98386b68b529cea2.svg",
    "ext": "svg",
    "rcx": 46.22600889212299,
    "rcy": 69.04377243782976,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 92.45496368408203,
    "h": 138.08978271484375
   },
   {
    "name": "walk 1",
    "file": "65b8a37f8dbf88241fdb6a3313cb7360.svg",
    "ext": "svg",
    "rcx": 43.94985783160004,
    "rcy": 73.80392758100002,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 87.90261840820312,
    "h": 147.6100616455078
   },
   {
    "name": "walk 2",
    "file": "601da8b0974dd93a05c4f51d5a936822.svg",
    "ext": "svg",
    "rcx": 42.32349999999994,
    "rcy": 75.642,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 84.64700317382812,
    "h": 151.28399658203125
   },
   {
    "name": "hurt",
    "file": "9442da51377b345bdfd0d413f5725643.svg",
    "ext": "svg",
    "rcx": 55.67211952011223,
    "rcy": 64.8870746854839,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 110.67704772949219,
    "h": 134.45211791992188
   },
   {
    "name": "dash",
    "file": "97f8ff78a2262a716b2b9a4692a95448.svg",
    "ext": "svg",
    "rcx": 66.519855,
    "rcy": 68.075875,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 133.03970336914062,
    "h": 136.15174865722656
   },
   {
    "name": "Soul Dash",
    "file": "a859f5264c7649afde340ea7782a8ec5.svg",
    "ext": "svg",
    "rcx": 39.321323322580554,
    "rcy": 36.784463753381885,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 78.64264678955078,
    "h": 73.56893157958984
   },
   {
    "name": "dead",
    "file": "56da234413fecbdce82cc2e613cc7423.svg",
    "ext": "svg",
    "rcx": 95.90386183064524,
    "rcy": 95.90386183064518,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 191.80772399902344,
    "h": 191.80772399902344
   },
   {
    "name": "dead2",
    "file": "416256c2e8e172b47d0790949fcc313d.svg",
    "ext": "svg",
    "rcx": 95.90386000000004,
    "rcy": 95.90386000000005,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 191.80772399902344,
    "h": 191.80772399902344
   },
   {
    "name": "dead3",
    "file": "82cf15fb7d8dada438f5e30f4f23e370.svg",
    "ext": "svg",
    "rcx": 95.90386000000001,
    "rcy": 95.90386,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 191.80772399902344,
    "h": 191.80772399902344
   },
   {
    "name": "dead4",
    "file": "4e4f471992d899f76e84965b02bbe73b.svg",
    "ext": "svg",
    "rcx": 95.90386000000001,
    "rcy": 95.90386,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 191.80772399902344,
    "h": 191.80772399902344
   },
   {
    "name": "dead5",
    "file": "ff417e8f8c0d66083ad7a2c1e047dc9e.svg",
    "ext": "svg",
    "rcx": 95.90385999999992,
    "rcy": 95.90385999999995,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 191.80772399902344,
    "h": 191.80772399902344
   },
   {
    "name": "dead end normal",
    "file": "c3354b88869bb970c6060b74206d8250.svg",
    "ext": "svg",
    "rcx": 50.349525,
    "rcy": 50.21612999999999,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 107.19577026367188,
    "h": 128.17669677734375
   },
   {
    "name": "dead end bleed1",
    "file": "d71df0cb62d68e5fda9f5c82b362d467.svg",
    "ext": "svg",
    "rcx": 95.90385999999992,
    "rcy": 95.90385999999997,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 191.80772399902344,
    "h": 191.80772399902344
   },
   {
    "name": "dead end bleed2",
    "file": "0e8789ab272ea6b699a186fbff3f96bb.svg",
    "ext": "svg",
    "rcx": 95.9038600000001,
    "rcy": 95.90385999999997,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 191.80772399902344,
    "h": 191.80772399902344
   },
   {
    "name": "dead end bleed3",
    "file": "d21c251956584aa11a5cb8e2b393a173.svg",
    "ext": "svg",
    "rcx": 95.90385999999998,
    "rcy": 95.90385999999988,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 191.80772399902344,
    "h": 191.80772399902344
   },
   {
    "name": "dead end bleed final",
    "file": "5165561ad0ac90296204649670d3a0d0.svg",
    "ext": "svg",
    "rcx": 52.41666000000001,
    "rcy": -23.431369999999987,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 116.08332824707031,
    "h": 37.19363021850586
   },
   {
    "name": "dead end fire1",
    "file": "50ca5c0e6b556add93b2010f311e75d3.svg",
    "ext": "svg",
    "rcx": 95.90386000000001,
    "rcy": 95.90386,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 191.80772399902344,
    "h": 191.80772399902344
   },
   {
    "name": "dead end fire2",
    "file": "b5db4da1d855eabf9171d534e7bb3fea.svg",
    "ext": "svg",
    "rcx": 95.90386000000001,
    "rcy": 95.90386,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 191.80772399902344,
    "h": 191.80772399902344
   },
   {
    "name": "dead end fire 3",
    "file": "698b2b4f426fb171d5b3718de81cc05e.svg",
    "ext": "svg",
    "rcx": 95.90386000000001,
    "rcy": 95.90386,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 191.80772399902344,
    "h": 191.80772399902344
   },
   {
    "name": "dead end fire 4",
    "file": "302378764686c07a4c3482cc6875ec2b.svg",
    "ext": "svg",
    "rcx": 95.90386000000001,
    "rcy": 95.90386,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 191.80772399902344,
    "h": 191.80772399902344
   },
   {
    "name": "dead end fire 5",
    "file": "674f4836a035c8464b34696e1f1ded37.svg",
    "ext": "svg",
    "rcx": 95.90386000000001,
    "rcy": 95.90386,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 191.80772399902344,
    "h": 191.80772399902344
   },
   {
    "name": "dead end fire final",
    "file": "6d421342bb3c464564301eecc5802bda.svg",
    "ext": "svg",
    "rcx": 48.46949000000001,
    "rcy": 82.269745,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 96.93724060058594,
    "h": 164.5382080078125
   },
   {
    "name": "idle old jack",
    "file": "524cbcca7543f0e2843bc07e0757f824.svg",
    "ext": "svg",
    "rcx": 59.63264501571433,
    "rcy": 54.72914134959231,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 119.26528930664062,
    "h": 109.25105285644531
   },
   {
    "name": "walk old jack",
    "file": "e26adbcebcf3919231791ee5784a05e3.svg",
    "ext": "svg",
    "rcx": 61.442313539795094,
    "rcy": 62.8162625935788,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122.82449340820312,
    "h": 125.63253021240234
   },
   {
    "name": "walk old jack2",
    "file": "815a391b418cea827d1d00cc87bf31d6.svg",
    "ext": "svg",
    "rcx": 61.382174648146645,
    "rcy": 62.81626065563802,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122.82449340820312,
    "h": 125.62284851074219
   },
   {
    "name": "damaged old jack",
    "file": "4153468f32ac9059e39309a92cbf12d1.svg",
    "ext": "svg",
    "rcx": 59.1315127495854,
    "rcy": 54.26991924977962,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 118.26303100585938,
    "h": 108.33438110351562
   },
   {
    "name": "dead old jack",
    "file": "8e3c98c90d9b2127ea404a08bf2f5448.svg",
    "ext": "svg",
    "rcx": 95.90385999999998,
    "rcy": 95.90386000000007,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 191.80772399902344,
    "h": 191.80772399902344
   }
  ],
  "sounds": [
   {
    "name": "damaged",
    "file": "c2c6107f9b1f3efe551ee9219db4b832.mp3",
    "rate": 48000,
    "samples": 23336
   },
   {
    "name": "dash",
    "file": "e7e7597bde6612d2ac1a24d5b5590b18.mp3",
    "rate": 48000,
    "samples": 27585
   }
  ],
  "vars": {
   "player x": 0,
   "moving": "false",
   "taking damage": "false",
   "last walkspeed": 4
  },
  "x": 0,
  "y": 0,
  "size": 40,
  "maxSize": 40,
  "direction": 53.51578240435006,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "left-right",
  "volume": 100,
  "layerOrder": 24
 },
 {
  "name": "play button",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "7955cebeb00d3dd9dde90985a7df7dce.svg",
    "ext": "svg",
    "rcx": 50,
    "rcy": 26.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 100,
    "h": 53
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "index": 0
  },
  "x": -2,
  "y": -48,
  "size": 84.43396226415092,
  "maxSize": 84.43396226415092,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 46
 },
 {
  "name": "codes button",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "5b982eb6f4461db29379eba206852c66.svg",
    "ext": "svg",
    "rcx": 50,
    "rcy": 26.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 100,
    "h": 53
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "asnwer": ""
  },
  "x": 50,
  "y": -100,
  "size": 84,
  "maxSize": 84,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 44
 },
 {
  "name": "back to the loby",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "6a92bcbe9c86813b01e7f8b50cc452cf.svg",
    "ext": "svg",
    "rcx": 83.5,
    "rcy": 26.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 167,
    "h": 53
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 0,
  "y": -140,
  "size": 80,
  "maxSize": 80,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 49
 },
 {
  "name": "bat",
  "isStage": false,
  "costumes": [
   {
    "name": "idle",
    "file": "de130c1ff5bafb9f476b229cc3301cd5.svg",
    "ext": "svg",
    "rcx": -31.180822611717247,
    "rcy": -22.7537734136352,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 54.5465202331543,
    "h": 58.18088912963867
   },
   {
    "name": "attack",
    "file": "5082cf16794b60891320f77602d74dbc.svg",
    "ext": "svg",
    "rcx": -15.896847868009473,
    "rcy": 21.758235039504285,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 75.7835922241211,
    "h": 55.51647186279297
   },
   {
    "name": "attack 2",
    "file": "3743d0090b39c02ad2e1315ce27414cb.svg",
    "ext": "svg",
    "rcx": -24.207570666005722,
    "rcy": 87.85559917402458,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 81.97659301757812,
    "h": 79.21041870117188
   },
   {
    "name": "idle (combo)",
    "file": "19d3b92b284ffed0d70f8627b18c65aa.svg",
    "ext": "svg",
    "rcx": -30.298393890364252,
    "rcy": 91.05420077832459,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 53.896278381347656,
    "h": 58.63407897949219
   },
   {
    "name": "attack (combo)",
    "file": "de898dd6829159b07880bb6cc4083f1e.svg",
    "ext": "svg",
    "rcx": -27.229983333333337,
    "rcy": 35.42513416666665,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 75.78398895263672,
    "h": 55.51694107055664
   },
   {
    "name": "attack 2 (combo)",
    "file": "69d70fc15c6ef4e330f3e01cceac06ed.svg",
    "ext": "svg",
    "rcx": -21.874316666666687,
    "rcy": -7.477728333333289,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 81.97643280029297,
    "h": 79.2104263305664
   }
  ],
  "sounds": [],
  "vars": {
   "joystick direction": 0,
   "swordCombo": "true"
  },
  "x": 0,
  "y": 0,
  "size": 55.00000000000001,
  "maxSize": 85,
  "direction": 53.51578240435006,
  "visible": false,
  "currentCostume": 3,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 22
 },
 {
  "name": "zombie3",
  "isStage": false,
  "costumes": [
   {
    "name": "z walk",
    "file": "5316d22d5491bf7eb7302f360b85e83d.svg",
    "ext": "svg",
    "rcx": 41.72540499999997,
    "rcy": 70.83126999999999,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 82.44096374511719,
    "h": 143.4129180908203
   },
   {
    "name": "z walk2",
    "file": "5a1b6c1a75a164beb69a5681c4da069d.svg",
    "ext": "svg",
    "rcx": 39.11822999999998,
    "rcy": 70.14259000000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 78.2356185913086,
    "h": 140.28456115722656
   },
   {
    "name": "     idle z",
    "file": "ef2be56f73f7d63855fed444d3f97ded.svg",
    "ext": "svg",
    "rcx": 44.40345499999998,
    "rcy": 63.01061499999999,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 88.80690002441406,
    "h": 126.0212173461914
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "health drop": "0",
   "spawn location": 1
  },
  "x": -43,
  "y": 165,
  "size": 40,
  "maxSize": 40,
  "direction": 153.57401597583313,
  "visible": false,
  "currentCostume": 2,
  "rotationStyle": "left-right",
  "volume": 100,
  "layerOrder": 16
 },
 {
  "name": "zombie2",
  "isStage": false,
  "costumes": [
   {
    "name": "z walk",
    "file": "5316d22d5491bf7eb7302f360b85e83d.svg",
    "ext": "svg",
    "rcx": 41.72539999999998,
    "rcy": 70.83126999999999,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 82.44096374511719,
    "h": 143.4129180908203
   },
   {
    "name": "z walk2",
    "file": "c7acb20a4dc9973acbe7ccc5cfc04eeb.svg",
    "ext": "svg",
    "rcx": 39.11822999999998,
    "rcy": 70.142595,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 78.2356185913086,
    "h": 140.28456115722656
   },
   {
    "name": "idle z",
    "file": "ef2be56f73f7d63855fed444d3f97ded.svg",
    "ext": "svg",
    "rcx": 44.40344999999999,
    "rcy": 63.01061499999999,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 88.80690002441406,
    "h": 126.0212173461914
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "spawn location": "0"
  },
  "x": 24,
  "y": -180,
  "size": 40,
  "maxSize": 40,
  "direction": -123.69006752597977,
  "visible": false,
  "currentCostume": 2,
  "rotationStyle": "left-right",
  "volume": 100,
  "layerOrder": 14
 },
 {
  "name": "zombie",
  "isStage": false,
  "costumes": [
   {
    "name": " idle z",
    "file": "0283d1f60d4743ba046d7691d5e04389.svg",
    "ext": "svg",
    "rcx": 44.40345800119999,
    "rcy": 63.01061177200002,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 88.80690002441406,
    "h": 126.0212173461914
   },
   {
    "name": "z walk",
    "file": "25dc901b56e36438a9a4225657609daf.svg",
    "ext": "svg",
    "rcx": 41.72539441258698,
    "rcy": 70.8312709695071,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 82.44096374511719,
    "h": 143.4129180908203
   },
   {
    "name": "z walk2",
    "file": "9feee10a9f28e42b6c6e32487621392c.svg",
    "ext": "svg",
    "rcx": 39.117878414110805,
    "rcy": 70.14240267357795,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 78.23576354980469,
    "h": 140.28480529785156
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "health drop": "0",
   "spawn location": 4
  },
  "x": -240,
  "y": -60,
  "size": 40,
  "maxSize": 40,
  "direction": -155.55604521958338,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "left-right",
  "volume": 100,
  "layerOrder": 17
 },
 {
  "name": "mouse click",
  "isStage": false,
  "costumes": [
   {
    "name": "mouse",
    "file": "97a792cc25f9b2aa95b3587717edef92.svg",
    "ext": "svg",
    "rcx": 16,
    "rcy": 12.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 32,
    "h": 25
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "timer": "0"
  },
  "x": 215,
  "y": 159,
  "size": 60,
  "maxSize": 60,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 31
 },
 {
  "name": "store",
  "isStage": false,
  "costumes": [
   {
    "name": "idle",
    "file": "7bd84c2f3141e9d2fda45bbc44ff1fc8.svg",
    "ext": "svg",
    "rcx": 54.696718709677526,
    "rcy": 28.68301999999997,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 109.39344024658203,
    "h": 57.36603927612305
   }
  ],
  "sounds": [],
  "vars": {
   "pauseOn": 0
  },
  "x": 160,
  "y": 155,
  "size": 45.000000000000014,
  "maxSize": 45.000000000000014,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 33
 },
 {
  "name": "bat hitbox",
  "isStage": false,
  "costumes": [
   {
    "name": "swd hitbox",
    "file": "f0edb7122d5c9e27043efadfae68d7c4.svg",
    "ext": "svg",
    "rcx": -83.63920999999999,
    "rcy": 107.22147,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 52.57535171508789,
    "h": 217.47267150878906
   },
   {
    "name": "shown",
    "file": "8c88ee59855af46e6f16db3f54300053.svg",
    "ext": "svg",
    "rcx": -81.68538893070729,
    "rcy": 108.81032977419356,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 52.57535171508789,
    "h": 218.6986846923828
   },
   {
    "name": "Allc hitbox",
    "file": "d5c1ae24235df6b30a08da11a9740de8.svg",
    "ext": "svg",
    "rcx": 125.184255,
    "rcy": 116.260375,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 250.3685302734375,
    "h": 232.52076721191406
   },
   {
    "name": "Allc shown",
    "file": "312717748c048477e87ab777290a30ee.svg",
    "ext": "svg",
    "rcx": 125.18424499999999,
    "rcy": 116.260365,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 250.3685302734375,
    "h": 232.52076721191406
   }
  ],
  "sounds": [
   {
    "name": "damage",
    "file": "4eb141cc432563bfe4461ab96f7ff741.wav",
    "rate": 48000,
    "samples": 27377
   },
   {
    "name": "miss",
    "file": "60d98dc19eb17b0bbb8cfd285df45db7.wav",
    "rate": 48000,
    "samples": 16876
   }
  ],
  "vars": {
   "fully maxed": "false"
  },
  "x": 0,
  "y": 0,
  "size": 40,
  "maxSize": 55,
  "direction": 0,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 5
 },
 {
  "name": "store menu",
  "isStage": false,
  "costumes": [
   {
    "name": "normal",
    "file": "81de38dc5d0946be16b74e4538aee979.svg",
    "ext": "svg",
    "rcx": 56.25,
    "rcy": 93.942865,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 230.88473510742188,
    "h": 211.58189392089844
   },
   {
    "name": "koc",
    "file": "613e754fae4bc5a152b8a971d7158b37.svg",
    "ext": "svg",
    "rcx": 56.25,
    "rcy": 93.942735,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 230.88473510742188,
    "h": 209.55859375
   },
   {
    "name": "swordonly",
    "file": "4619003be9514e1f5d8772f5a0e56188.svg",
    "ext": "svg",
    "rcx": 57.552159999999986,
    "rcy": 93.94283499999999,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 235.19212341308594,
    "h": 209.5586700439453
   },
   {
    "name": "nocooldown",
    "file": "4cf4185ec293e10b4e66be838437b21c.svg",
    "ext": "svg",
    "rcx": 57.552159999999986,
    "rcy": 93.94279499999999,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 232.18690490722656,
    "h": 209.55865478515625
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -181,
  "y": 57,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 35
 },
 {
  "name": "walkspeed upgrade",
  "isStage": false,
  "costumes": [
   {
    "name": "5",
    "file": "0a557b8b07342518eb4ae9db5b45a51e.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 157.5,
    "h": 99.6263198852539
   },
   {
    "name": "10",
    "file": "f58928495bcb335968ef37d3175d0624.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 157.5,
    "h": 98.98696899414062
   },
   {
    "name": "15",
    "file": "b5980ff9fbb93cb1f25bcb86d0edbd2b.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 157.5,
    "h": 98.77384948730469
   },
   {
    "name": "20",
    "file": "92e89b5d1f021a5c400a1f5111620898.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 158.57470703125,
    "h": 98.77393341064453
   },
   {
    "name": "máx",
    "file": "f27f001d29a6bd0ca9a8bae90c47f46d.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 157.5,
    "h": 96.13638305664062
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -181,
  "y": 135,
  "size": 40,
  "maxSize": 50,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 99
 },
 {
  "name": "info texts",
  "isStage": false,
  "costumes": [
   {
    "name": "Can´t",
    "file": "dec9d4645dd2b25c76c59a4f2eca72e4.svg",
    "ext": "svg",
    "rcx": 83.478515625,
    "rcy": 13.481249999999989,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 166.3828125,
    "h": 27.5
   },
   {
    "name": "Max",
    "file": "28d935c94d4edfa21fe1efd05e24dc07.svg",
    "ext": "svg",
    "rcx": 70.98828124999997,
    "rcy": 13.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 171.7734375,
    "h": 27.5
   },
   {
    "name": "Bought",
    "file": "8f69ef5beaea42eb8cc9c25a68f92710.svg",
    "ext": "svg",
    "rcx": 97.13476562499991,
    "rcy": 13.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 194.7734375,
    "h": 27.5
   },
   {
    "name": "Code Used",
    "file": "19f72bc6038644ac6c402ce58b7d993f.svg",
    "ext": "svg",
    "rcx": 105.28906249999997,
    "rcy": 13.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 221.0390625,
    "h": 27.5
   },
   {
    "name": "power max",
    "file": "53c73dba580c2091213edcd21827aacd.svg",
    "ext": "svg",
    "rcx": 69.18945312500003,
    "rcy": 13.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 168.421875,
    "h": 27.5
   },
   {
    "name": "code not on mobile",
    "file": "95ae6f99330d699c7d89fa398a458b6c.svg",
    "ext": "svg",
    "rcx": 137.7500000000001,
    "rcy": 13.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 276,
    "h": 27.5
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -12,
  "y": 167,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 2,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 43
 },
 {
  "name": "p health",
  "isStage": false,
  "costumes": [
   {
    "name": "base",
    "file": "92d81ff8e7e6bcef30996e8ec051f3cd.png",
    "ext": "png",
    "rcx": 48,
    "rcy": 8,
    "res": 2,
    "vx": 0,
    "vy": 0,
    "w": 96,
    "h": 16
   },
   {
    "name": "empty",
    "file": "365249d084e4c6cce563ba0650a7ace4.png",
    "ext": "png",
    "rcx": 46,
    "rcy": 8,
    "res": 2,
    "vx": 0,
    "vy": 0,
    "w": 46,
    "h": 16
   },
   {
    "name": "full",
    "file": "310f58c91bd1e17fffb61484fba47488.png",
    "ext": "png",
    "rcx": 92,
    "rcy": 8,
    "res": 2,
    "vx": 0,
    "vy": 0,
    "w": 46,
    "h": 16
   },
   {
    "name": "big [shot]",
    "file": "4ecaf903067f90f21195ec613b1f9947.svg",
    "ext": "svg",
    "rcx": 248.5,
    "rcy": 182,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 508,
    "h": 373
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "bar width": 46,
   "bar %": 1,
   "hp max": "100"
  },
  "x": 46,
  "y": 35,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 2,
  "rotationStyle": "don't rotate",
  "volume": 100,
  "layerOrder": 34
 },
 {
  "name": "bat length upgrade",
  "isStage": false,
  "costumes": [
   {
    "name": "15",
    "file": "fedc0c4a4cd8069523767bc6746ac96a.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 157.5,
    "h": 98.77394104003906
   },
   {
    "name": "25",
    "file": "183c298f23f8feee5160542e266f567a.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 157.78404235839844,
    "h": 98.13456726074219
   },
   {
    "name": "40",
    "file": "99a41fbb21532e003c7bb3570a701088.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 159.35250854492188,
    "h": 98.13458251953125
   },
   {
    "name": "máx",
    "file": "76dbaf57234a1239952b03afad30fe21.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 157.5,
    "h": 96.13638305664062
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -180,
  "y": 47,
  "size": 40,
  "maxSize": 50,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 96
 },
 {
  "name": "Attack button",
  "isStage": false,
  "costumes": [
   {
    "name": "sword  attack",
    "file": "05a53330a753a5d01e4d75b1049f84e0.svg",
    "ext": "svg",
    "rcx": 61.5,
    "rcy": 40.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 123,
    "h": 81
   },
   {
    "name": "bow attack",
    "file": "0107f91c7ecd3ee14d2e32157a715586.svg",
    "ext": "svg",
    "rcx": 61.5,
    "rcy": 40.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 123,
    "h": 81
   },
   {
    "name": "koc attack",
    "file": "60a09cad7e88fe151e4be8afdf1eb6c2.svg",
    "ext": "svg",
    "rcx": 61.5,
    "rcy": 40.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 123,
    "h": 81
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 176,
  "y": -144,
  "size": 60,
  "maxSize": 60,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 28
 },
 {
  "name": "bow",
  "isStage": false,
  "costumes": [
   {
    "name": "idle",
    "file": "60fb038fd63ad18384dc5a6f39995f1b.svg",
    "ext": "svg",
    "rcx": -30.204124974799186,
    "rcy": 45.220880092206585,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 81.16715240478516,
    "h": 92.78883361816406
   },
   {
    "name": "charge",
    "file": "f98142ec81109bcdcf76381020252ced.svg",
    "ext": "svg",
    "rcx": -8.763804136669535,
    "rcy": 43.066027940605096,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 78.58740997314453,
    "h": 82.67442321777344
   },
   {
    "name": "charge 2",
    "file": "abb17af6c9859d2d406d145e669e4ffc.svg",
    "ext": "svg",
    "rcx": 12.13165313687415,
    "rcy": 47.30784041844325,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 95.89166259765625,
    "h": 97.65750885009766
   },
   {
    "name": "shoot",
    "file": "57c1cf6c2398f2d887e295a9b32b0fc0.svg",
    "ext": "svg",
    "rcx": 6.243530455923292,
    "rcy": 56.80606676562387,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 91.78927612304688,
    "h": 104.76262664794922
   },
   {
    "name": "arrow",
    "file": "ace52a3d6383b39aa949cbffd9dd0591.svg",
    "ext": "svg",
    "rcx": 34.21157201230636,
    "rcy": 8.62265227044648,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 68.42314147949219,
    "h": 17.24530029296875
   },
   {
    "name": "Idle.mb",
    "file": "6501a015c3c8c00ef27bcc355ecb1744.svg",
    "ext": "svg",
    "rcx": -24.582360368130367,
    "rcy": 52.73986637007005,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 79.981201171875,
    "h": 108.24017333984375
   },
   {
    "name": "charge.mb",
    "file": "dca233742d08dc63156f4928849cb1e3.svg",
    "ext": "svg",
    "rcx": -11.3566404178234,
    "rcy": 53.63436567892333,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 78.39053344726562,
    "h": 103.04920196533203
   },
   {
    "name": "charge2.mb",
    "file": "bb1cc8099dbbee6fe05f1af9f626cf81.svg",
    "ext": "svg",
    "rcx": 9.329147942902438,
    "rcy": 58.69206402551161,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 95.37361145019531,
    "h": 107.55841064453125
   },
   {
    "name": "shoot.mb",
    "file": "f3b4cd716d2bc7161f15f3743d0dc310.svg",
    "ext": "svg",
    "rcx": 18.673578436684437,
    "rcy": 66.46364419876119,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 106.1937484741211,
    "h": 122.04595184326172
   },
   {
    "name": "metal.arrow",
    "file": "8b8b4f6898643a5381bfc2402a0397b7.svg",
    "ext": "svg",
    "rcx": 31.945447622661845,
    "rcy": 7.957635813910599,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 63.890899658203125,
    "h": 15.91526985168457
   }
  ],
  "sounds": [
   {
    "name": "saindo do arco",
    "file": "c8c28f4c04641bccb6e6b565760b69a2.mp3",
    "rate": 48000,
    "samples": 22918
   },
   {
    "name": "acerta os bixo kkk",
    "file": "7dab37332c6b91c9f3041b344c41f1d2.mp3",
    "rate": 48000,
    "samples": 41232
   },
   {
    "name": "acertando o nada kkk",
    "file": "55500a8e94f02eb7368007d8e2d27901.mp3",
    "rate": 48000,
    "samples": 37667
   },
   {
    "name": "acertando fogo kkk",
    "file": "b610887493ce7fbf0aa5605f758eac83.wav",
    "rate": 48000,
    "samples": 29394
   }
  ],
  "vars": {
   "IM CLONE!": "false"
  },
  "x": 0,
  "y": 0,
  "size": 60,
  "maxSize": 60,
  "direction": 53.51578240435006,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 23
 },
 {
  "name": "choose bow",
  "isStage": false,
  "costumes": [
   {
    "name": "unselected",
    "file": "55d0bf1a7c8763edc7e8b7e5ec22809d.svg",
    "ext": "svg",
    "rcx": 39.99998499999998,
    "rcy": 40.999965,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 80,
    "h": 82
   },
   {
    "name": "Blocked",
    "file": "fa29c5a91e325135c25ebe4d4738124e.svg",
    "ext": "svg",
    "rcx": 40,
    "rcy": 40.999975000000006,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 80,
    "h": 82
   },
   {
    "name": "selected",
    "file": "0d875718c85158322e322bd70587ce46.svg",
    "ext": "svg",
    "rcx": 39.99998500000001,
    "rcy": 40.999955,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 80,
    "h": 82
   },
   {
    "name": "clone",
    "file": "d9dcd13ab55ae79cedbdc0ad2cd581ab.svg",
    "ext": "svg",
    "rcx": 39.999975000000006,
    "rcy": 40.999945,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 80,
    "h": 82
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 8,
  "y": -142,
  "size": 70,
  "maxSize": 70,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 89
 },
 {
  "name": "choose bat",
  "isStage": false,
  "costumes": [
   {
    "name": "unselected",
    "file": "fc49bb32e0736c204886665c61ca1fba.svg",
    "ext": "svg",
    "rcx": 40,
    "rcy": 40.99999,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 80,
    "h": 82
   },
   {
    "name": "blocked",
    "file": "cb433d35dadf14585a1686fb76f8a5de.svg",
    "ext": "svg",
    "rcx": 40,
    "rcy": 40.999965,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 80,
    "h": 82
   },
   {
    "name": "selected",
    "file": "32d6cfa719943f326898a2c24459742d.svg",
    "ext": "svg",
    "rcx": 40,
    "rcy": 40.99999,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 80,
    "h": 82
   },
   {
    "name": "clone",
    "file": "d5d7998b7836c6318d152c4098294a09.svg",
    "ext": "svg",
    "rcx": 40,
    "rcy": 40.99999,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 80,
    "h": 82
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -61,
  "y": -142,
  "size": 70,
  "maxSize": 70,
  "direction": 90,
  "visible": false,
  "currentCostume": 2,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 32
 },
 {
  "name": "dash distance upgrade",
  "isStage": false,
  "costumes": [
   {
    "name": "10",
    "file": "00dd552252f4e590dba9693d08890bc9.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 157.5,
    "h": 98.987060546875
   },
   {
    "name": "20",
    "file": "e945f85a5887a147d02c8a6068e3f7eb.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 157.7222137451172,
    "h": 98.987060546875
   },
   {
    "name": "30",
    "file": "d8f9e776077b263ac26f07e9cecf19be.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 157.5,
    "h": 98.98705291748047
   },
   {
    "name": "máx",
    "file": "8b2804ba1a43044fb3f95e6225890d07.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 157.5,
    "h": 96.13638305664062
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -181,
  "y": 91,
  "size": 40,
  "maxSize": 50,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 97
 },
 {
  "name": "+alma",
  "isStage": false,
  "costumes": [
   {
    "name": "+1 Alma",
    "file": "09459f9cc7b1193400917b30a9b9ba0c.svg",
    "ext": "svg",
    "rcx": 18.2314453125,
    "rcy": 13.481249999999989,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 34.087890625,
    "h": 27.5
   },
   {
    "name": "+2 almas",
    "file": "7c38041780579f4514c0e69ebb75a044.svg",
    "ext": "svg",
    "rcx": 19.03044,
    "rcy": 13.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 37.81087875366211,
    "h": 27.5
   },
   {
    "name": "+5 almas",
    "file": "05ceae1e3dcbac9f05830095faf6e3df.svg",
    "ext": "svg",
    "rcx": 20.217939062499994,
    "rcy": 13.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 40.18587875366211,
    "h": 27.5
   },
   {
    "name": "8 Almas",
    "file": "6a9b63f0abad796c6a86018eb3deac54.svg",
    "ext": "svg",
    "rcx": 20.310879999999997,
    "rcy": 19.375,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 40.31087875366211,
    "h": 32.961910247802734
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -88,
  "y": 8,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 41
 },
 {
  "name": "bow shot rate upg",
  "isStage": false,
  "costumes": [
   {
    "name": "20",
    "file": "51ffebb0c414b8e68b748d769e07f39f.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 158.57470703125,
    "h": 98.77394104003906
   },
   {
    "name": "30",
    "file": "1002819730e000eeececae05363c99fd.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 158.33970642089844,
    "h": 98.77394104003906
   },
   {
    "name": "40",
    "file": "22e13d73ca828f3fc498a2c5348d3330.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 158.713134765625,
    "h": 98.77393341064453
   },
   {
    "name": "50",
    "file": "90323ddb78f840ab7e0cf27a303b51ad.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 159.2733154296875,
    "h": 98.77393341064453
   },
   {
    "name": "máx",
    "file": "b4d210838829ae6b922a1c1fdf5ef27f.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 157.5,
    "h": 96.13638305664062
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -180,
  "y": -1,
  "size": 40,
  "maxSize": 50,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 98
 },
 {
  "name": "death message",
  "isStage": false,
  "costumes": [
   {
    "name": "death",
    "file": "37c4251c885b6ae32d8150a7a5212443.svg",
    "ext": "svg",
    "rcx": 138.96864499999998,
    "rcy": 59.42152499999999,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 293.69915771484375,
    "h": 99.92151641845703
   },
   {
    "name": "paused",
    "file": "d25ad565f2fc85e7acd01533f4f4bdd3.svg",
    "ext": "svg",
    "rcx": 82.99999999999997,
    "rcy": 40.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 166,
    "h": 81
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "skiped": "false"
  },
  "x": 2,
  "y": 5,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 1,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 95
 },
 {
  "name": "Allc buy",
  "isStage": false,
  "costumes": [
   {
    "name": "75",
    "file": "f215ae8ac70e44a1331001abbdb98984.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 157.5,
    "h": 101.11827850341797
   },
   {
    "name": "bougth",
    "file": "9df9b3d407b2475620e5ec5b1c0f7881.svg",
    "ext": "svg",
    "rcx": 82.24491500000002,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 167.37818908691406,
    "h": 95.57711029052734
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -59,
  "y": 47,
  "size": 40,
  "maxSize": 50,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 36
 },
 {
  "name": "shield",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "fa49485cae1e0a1f1769c723c9ecbfea.svg",
    "ext": "svg",
    "rcx": -19.259981398799994,
    "rcy": 41.67452944119998,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 48.760948181152344,
    "h": 92.16837310791016
   },
   {
    "name": "costume2",
    "file": "72a998bdbbb6153224a87e5992c6b7d6.svg",
    "ext": "svg",
    "rcx": -19.657804999999996,
    "rcy": 28.871274999999997,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 48.363121032714844,
    "h": 79.36511993408203
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -240,
  "y": -60,
  "size": 100,
  "maxSize": 100,
  "direction": 75.96375653207352,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 4
 },
 {
  "name": "shield2",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "0d09afe6cdbc0889505cc7f382cb4fc5.svg",
    "ext": "svg",
    "rcx": -19.259974999999997,
    "rcy": 41.67453499999999,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 39.45473861694336,
    "h": 88.01441955566406
   },
   {
    "name": "costume2",
    "file": "72a998bdbbb6153224a87e5992c6b7d6.svg",
    "ext": "svg",
    "rcx": -19.657804999999996,
    "rcy": 28.871274999999997,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 48.363121032714844,
    "h": 79.36511993408203
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "Shield chance": 3
  },
  "x": 24,
  "y": -180,
  "size": 100,
  "maxSize": 100,
  "direction": -7.5946433685914485,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 3
 },
 {
  "name": "shield3",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "a802f257a1dfb786ed3825459e4bc37d.svg",
    "ext": "svg",
    "rcx": -19.259979999999985,
    "rcy": 41.674530000000004,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 39.45473861694336,
    "h": 88.01441955566406
   },
   {
    "name": "costume2",
    "file": "72a998bdbbb6153224a87e5992c6b7d6.svg",
    "ext": "svg",
    "rcx": -19.657804999999996,
    "rcy": 28.871274999999997,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 48.363121032714844,
    "h": 79.36511993408203
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "Shield chance": 3
  },
  "x": -43,
  "y": 165,
  "size": 100,
  "maxSize": 100,
  "direction": 165.39326264555302,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 2
 },
 {
  "name": "dash button",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "328c8d62f235f60f82b6729fc758a296.svg",
    "ext": "svg",
    "rcx": 61.49999999999997,
    "rcy": 40.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 123,
    "h": 81
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 176,
  "y": -87,
  "size": 60,
  "maxSize": 60,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 27
 },
 {
  "name": "cooldown dash mobile blocker",
  "isStage": false,
  "costumes": [
   {
    "name": "cooldown",
    "file": "070c84c389657c590b3a96b4e12fdfda.svg",
    "ext": "svg",
    "rcx": 61.5,
    "rcy": 40.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 123,
    "h": 81
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "clicks": "0"
  },
  "x": 176,
  "y": -87,
  "size": 60,
  "maxSize": 60,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 86
 },
 {
  "name": "Joystick",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "2720f55512635e03c36d6a1765d8450f.svg",
    "ext": "svg",
    "rcx": 21,
    "rcy": 21,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 42,
    "h": 42
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -174,
  "y": -122,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 30
 },
 {
  "name": "base",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "01b667f3b6ac36b772c0fa04eaeb2b97.svg",
    "ext": "svg",
    "rcx": 49.49999999999997,
    "rcy": 49.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 99,
    "h": 99
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -174,
  "y": -122,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 29
 },
 {
  "name": "pointer",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "20703e97a9a6ee7bde61bd790ec2b514.svg",
    "ext": "svg",
    "rcx": 13,
    "rcy": 13,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 26,
    "h": 26
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -174,
  "y": -122,
  "size": 19.230769230769234,
  "maxSize": 19.230769230769234,
  "direction": -5.102165252358205,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 13
 },
 {
  "name": "dash cooldown timer",
  "isStage": false,
  "costumes": [
   {
    "name": "1",
    "file": "d6d66d887fc1fb84a83aa2a6e68a74be.svg",
    "ext": "svg",
    "rcx": 37.99999999999994,
    "rcy": 20.500005000000016,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 76,
    "h": 41.0000114440918
   },
   {
    "name": "2",
    "file": "8962d2141348f329ab327ed8c96a79c6.svg",
    "ext": "svg",
    "rcx": 38.00000000000006,
    "rcy": 21.000004999999987,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 76,
    "h": 42.0000114440918
   },
   {
    "name": "3",
    "file": "51987b2372b2f8d8b32a30d39e9fcd39.svg",
    "ext": "svg",
    "rcx": 38,
    "rcy": 21.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 76,
    "h": 43
   },
   {
    "name": "4",
    "file": "49323d39a36f4a949ad282a34de6b3c4.svg",
    "ext": "svg",
    "rcx": 38,
    "rcy": 21.45011500000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 75.66667175292969,
    "h": 42.76626968383789
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 167,
  "y": 117,
  "size": 50,
  "maxSize": 50,
  "direction": 90,
  "visible": false,
  "currentCostume": 2,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 76
 },
 {
  "name": "pause",
  "isStage": false,
  "costumes": [
   {
    "name": "pause",
    "file": "725662c78fbccf4b2fdb7626d361f898.svg",
    "ext": "svg",
    "rcx": 14.33332999999999,
    "rcy": 16.666674999999998,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 28.66666030883789,
    "h": 33.333351135253906
   },
   {
    "name": "play",
    "file": "1cf85657c96a56f62514acfc68d5c132.svg",
    "ext": "svg",
    "rcx": 9.606905000000012,
    "rcy": 19.60445999999999,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 22.904260635375977,
    "h": 36.241668701171875
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "pauseOn": "true"
  },
  "x": 215,
  "y": 156,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 40
 },
 {
  "name": "screen color",
  "isStage": false,
  "costumes": [
   {
    "name": "pause box",
    "file": "56260db300df9c66087890f34c0fa990.svg",
    "ext": "svg",
    "rcx": 290,
    "rcy": 193.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 598,
    "h": 421
   },
   {
    "name": "loading box",
    "file": "ca58f299337efff219aeb6f68abea8cf.svg",
    "ext": "svg",
    "rcx": 290,
    "rcy": 193.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 598,
    "h": 421
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 0,
  "y": 0,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 18
 },
 {
  "name": "hitbox off",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "a45699e9d74826107ba5cb01ec98b0f7.svg",
    "ext": "svg",
    "rcx": 49,
    "rcy": 12.981249999999989,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 98,
    "h": 64.98124694824219
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 146,
  "y": 29,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 79
 },
 {
  "name": "hitbox on",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "38032dc5d549a912b3992166b0ebb23a.svg",
    "ext": "svg",
    "rcx": 49,
    "rcy": 12.981249999999989,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 98,
    "h": 64.98124694824219
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 146,
  "y": 29,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 77
 },
 {
  "name": "zombie knight",
  "isStage": false,
  "costumes": [
   {
    "name": "z walk",
    "file": "b0e74acc182cc9e91c24a2da6f782bf5.svg",
    "ext": "svg",
    "rcx": 41.87632466103173,
    "rcy": 74.05905565052822,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 83.75264739990234,
    "h": 148.11810302734375
   },
   {
    "name": "z walk2",
    "file": "2fd72875b733be52cb567440cdf53ce2.svg",
    "ext": "svg",
    "rcx": 36.98387423291456,
    "rcy": 70.8201847013257,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 73.9677505493164,
    "h": 141.64036560058594
   },
   {
    "name": "     idle z",
    "file": "95901a0e7e81e27406f07c48e5eae269.svg",
    "ext": "svg",
    "rcx": 50.028400461442715,
    "rcy": 69.35856313972741,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 100.0599594116211,
    "h": 138.719482421875
   },
   {
    "name": "hurt",
    "file": "bea883624722108cfda30858343da910.svg",
    "ext": "svg",
    "rcx": 63.0839314993018,
    "rcy": 72.46127266811693,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 126.16786193847656,
    "h": 144.92254638671875
   }
  ],
  "sounds": [],
  "vars": {
   "health drop": "0",
   "spawn location": 2
  },
  "x": 159,
  "y": 165,
  "size": 40,
  "maxSize": 40,
  "direction": -87.76808244341822,
  "visible": false,
  "currentCostume": 2,
  "rotationStyle": "left-right",
  "volume": 100,
  "layerOrder": 15
 },
 {
  "name": "z knight health",
  "isStage": false,
  "costumes": [
   {
    "name": "base",
    "file": "92d81ff8e7e6bcef30996e8ec051f3cd.png",
    "ext": "png",
    "rcx": 48,
    "rcy": 8,
    "res": 2,
    "vx": 0,
    "vy": 0,
    "w": 96,
    "h": 16
   },
   {
    "name": "empty",
    "file": "365249d084e4c6cce563ba0650a7ace4.png",
    "ext": "png",
    "rcx": 46,
    "rcy": 8,
    "res": 2,
    "vx": 0,
    "vy": 0,
    "w": 46,
    "h": 16
   },
   {
    "name": "full",
    "file": "310f58c91bd1e17fffb61484fba47488.png",
    "ext": "png",
    "rcx": 92,
    "rcy": 8,
    "res": 2,
    "vx": 0,
    "vy": 0,
    "w": 46,
    "h": 16
   },
   {
    "name": "big [shot]",
    "file": "4ecaf903067f90f21195ec613b1f9947.svg",
    "ext": "svg",
    "rcx": 248.5,
    "rcy": 182,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 508,
    "h": 373
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "bar width": 46,
   "bar %": 1,
   "hp max": "3"
  },
  "x": 205,
  "y": 180,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 2,
  "rotationStyle": "don't rotate",
  "volume": 100,
  "layerOrder": 90
 },
 {
  "name": "koc hitbox",
  "isStage": false,
  "costumes": [
   {
    "name": "pc",
    "file": "5d3212e8008850529012824bb7453ba5.svg",
    "ext": "svg",
    "rcx": 40.3199071862237,
    "rcy": 50.89992980373668,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 75.66259002685547,
    "h": 101.79985809326172
   }
  ],
  "sounds": [
   {
    "name": "dismantle-made-with-Voicemod",
    "file": "8dab70260f22374832c595a338f0e9bb.wav",
    "rate": 48000,
    "samples": 15501
   }
  ],
  "vars": {
   "mobile koc": "true"
  },
  "x": 105,
  "y": -144,
  "size": 100,
  "maxSize": 100,
  "direction": 0,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 10
 },
 {
  "name": "achievements",
  "isStage": false,
  "costumes": [
   {
    "name": "All upg",
    "file": "78c1d432a52ce4d28efb40c501d8f40e.svg",
    "ext": "svg",
    "rcx": 61.000000000000085,
    "rcy": 25.999999004524852,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122,
    "h": 64
   },
   {
    "name": "sword only",
    "file": "26c07d29356c48c65ad3f4768fbb046e.svg",
    "ext": "svg",
    "rcx": 60.99999999999997,
    "rcy": 26,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122,
    "h": 52
   },
   {
    "name": "bow player",
    "file": "ec956f62c0d12449e32af905494557a4.svg",
    "ext": "svg",
    "rcx": 61,
    "rcy": 26,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122,
    "h": 52
   },
   {
    "name": "A PLATINA",
    "file": "71038bf52e2708702a1fe9ed4516c554.svg",
    "ext": "svg",
    "rcx": 61,
    "rcy": 26,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122,
    "h": 52
   },
   {
    "name": "rich boi",
    "file": "94b16b5efc876e42d230645179d96e52.svg",
    "ext": "svg",
    "rcx": 61,
    "rcy": 26,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122,
    "h": 64
   },
   {
    "name": "knight kill N1",
    "file": "c1461f4cc7ab3368b407988f1df33e81.svg",
    "ext": "svg",
    "rcx": 61,
    "rcy": 26,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122,
    "h": 52
   },
   {
    "name": "davi golias",
    "file": "1b270ada87bab894c5c1615bd86f1404.svg",
    "ext": "svg",
    "rcx": 61,
    "rcy": 26,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122,
    "h": 64
   },
   {
    "name": "Quase um de nós",
    "file": "55bfa724919417ac3dc4ea516f22cba9.svg",
    "ext": "svg",
    "rcx": 61,
    "rcy": 26,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122,
    "h": 64
   },
   {
    "name": "sereia sombra",
    "file": "d5746d805da596ad8d78dadec8105bc2.svg",
    "ext": "svg",
    "rcx": 61,
    "rcy": 25.999955,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122,
    "h": 52
   },
   {
    "name": "Verdadeiramente poderoso",
    "file": "75f466f7adb9beef4b7aa1de116d9dd7.svg",
    "ext": "svg",
    "rcx": 61,
    "rcy": 26,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122,
    "h": 64
   }
  ],
  "sounds": [
   {
    "name": "PLATINA",
    "file": "857a46bbf2e51a9864e9eb3fbbea5b1c.wav",
    "rate": 48000,
    "samples": 48985
   },
   {
    "name": "Conquista",
    "file": "9a43b9736981e08db5db5a053c502f73.wav",
    "rate": 48000,
    "samples": 19554
   }
  ],
  "vars": {
   "bow": "false",
   "sword": "false",
   "maxed": "false",
   "rich": "false",
   "davidegoliath": "false",
   "oneofus": "false",
   "m shadow": "false",
   "first knight kill": "false",
   "All powers": "false"
  },
  "x": 18,
  "y": 191,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 8,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 45
 },
 {
  "name": "boss brute",
  "isStage": false,
  "costumes": [
   {
    "name": "idle",
    "file": "57ffa0e5c0f1bbd654321fac947bd079.svg",
    "ext": "svg",
    "rcx": 67.47700978756444,
    "rcy": 113.69466149068727,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 134.95509338378906,
    "h": 227.39010620117188
   },
   {
    "name": "damaged",
    "file": "148bc68237c52ebb50597a0bfe1cc104.svg",
    "ext": "svg",
    "rcx": 88.40859000000006,
    "rcy": 85.7129675000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 176.81495666503906,
    "h": 171.42425537109375
   },
   {
    "name": "walk 1",
    "file": "d86d1e115d03b3402e8fc8148536adc5.svg",
    "ext": "svg",
    "rcx": 63.78742500000001,
    "rcy": 118.53177,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 127.57737731933594,
    "h": 237.0654296875
   },
   {
    "name": "walk 2",
    "file": "ab06a7b90d6b63e95f87638a04d62621.svg",
    "ext": "svg",
    "rcx": 46.93647723963733,
    "rcy": 122.04546430990935,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 112.96772766113281,
    "h": 245.75436401367188
   },
   {
    "name": "walk 3",
    "file": "9de36344918fb60a28c1dbf371aab90f.svg",
    "ext": "svg",
    "rcx": 61.31205,
    "rcy": 115.19378999999995,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122.62667846679688,
    "h": 230.3895263671875
   },
   {
    "name": "walk 4",
    "file": "e049d16eeb960a21d2d99e08e0885ab4.svg",
    "ext": "svg",
    "rcx": 82.67499999999998,
    "rcy": 120.20583,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 146.91366577148438,
    "h": 239.09478759765625
   },
   {
    "name": "charge.prep",
    "file": "7568c3f8c831da705900a858ab723443.svg",
    "ext": "svg",
    "rcx": 88.73712000000017,
    "rcy": 86.03171999999992,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 177.4742431640625,
    "h": 172.06344604492188
   },
   {
    "name": "charge",
    "file": "44ed45547b8b1b746bcbc1b417c6791f.svg",
    "ext": "svg",
    "rcx": 76.68968999999998,
    "rcy": 113.54057999999995,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 153.37937927246094,
    "h": 227.08116149902344
   }
  ],
  "sounds": [
   {
    "name": "undertale-heavy-hit",
    "file": "df8750153a6bed7a8537aad611e931c6.mp3",
    "rate": 48000,
    "samples": 82686
   }
  ],
  "vars": {
   "z hp": 0,
   "spawn location": "0"
  },
  "x": 86.3199095150631,
  "y": -76.69002298239424,
  "size": 50,
  "maxSize": 50,
  "direction": 79.22244468698413,
  "visible": false,
  "currentCostume": 4,
  "rotationStyle": "left-right",
  "volume": 100,
  "layerOrder": 20
 },
 {
  "name": "talkbox",
  "isStage": false,
  "costumes": [
   {
    "name": "hello",
    "file": "3a0d7624031ead605efa84ef396c5b5a.svg",
    "ext": "svg",
    "rcx": 126.50000000000003,
    "rcy": 49.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 253,
    "h": 99
   },
   {
    "name": "buy",
    "file": "2526cdbf91726e22db3cc19a51a1612e.svg",
    "ext": "svg",
    "rcx": 126.5,
    "rcy": 49.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 253,
    "h": 99
   },
   {
    "name": "fail",
    "file": "8b61acc8cb8f7eddacaca8ece96ff00f.svg",
    "ext": "svg",
    "rcx": 126.5,
    "rcy": 49.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 253,
    "h": 99
   },
   {
    "name": "empty",
    "file": "227f08715775b1e4dae15d591a7571bd.svg",
    "ext": "svg",
    "rcx": 126.49999999999997,
    "rcy": 49.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 253,
    "h": 99
   }
  ],
  "sounds": [
   {
    "name": "talk",
    "file": "e53b2ceeca79c2ecca3e022ff669384e.wav",
    "rate": 48000,
    "samples": 5863
   }
  ],
  "vars": {},
  "x": 139,
  "y": 47,
  "size": 5.05050505050505,
  "maxSize": 5.05050505050505,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 84
 },
 {
  "name": "talkbox animation",
  "isStage": false,
  "costumes": [
   {
    "name": "hello1",
    "file": "f69f5a27dcd551ae4a85cacc98792452.svg",
    "ext": "svg",
    "rcx": 22,
    "rcy": 19,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 121.25,
    "h": 34
   },
   {
    "name": "hello2",
    "file": "669b42d0fb3846ee7499c1936410c909.svg",
    "ext": "svg",
    "rcx": 0,
    "rcy": 19,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 101,
    "h": 34
   },
   {
    "name": "hello3",
    "file": "e1b432ec07c24568cc222f40a93ac7b7.svg",
    "ext": "svg",
    "rcx": -21,
    "rcy": 19,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 81.625,
    "h": 34
   },
   {
    "name": "hello4",
    "file": "3b59cba737e3d688813a37e9f66c4f73.svg",
    "ext": "svg",
    "rcx": -48,
    "rcy": 19,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 55,
    "h": 34
   },
   {
    "name": "hello5",
    "file": "59fc6149099a800af2b1d29f122a8566.svg",
    "ext": "svg",
    "rcx": -78,
    "rcy": 19,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 23.375,
    "h": 34
   },
   {
    "name": "...1",
    "file": "b8ce23246f39534f123041b4b4aa8a1d.svg",
    "ext": "svg",
    "rcx": -46,
    "rcy": 18,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 26,
    "h": 34
   },
   {
    "name": "...2",
    "file": "c16229cd29f1b06a63100021f9395670.svg",
    "ext": "svg",
    "rcx": -50,
    "rcy": 18,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 22,
    "h": 34
   },
   {
    "name": "bought1",
    "file": "b8934c371882eaf6224d149e59c03a75.svg",
    "ext": "svg",
    "rcx": -14.000000000000057,
    "rcy": 18,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 58,
    "h": 34
   },
   {
    "name": "bought2",
    "file": "f09b861c3aaa890ef2d70934c65f5104.svg",
    "ext": "svg",
    "rcx": -31,
    "rcy": 18,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 41,
    "h": 34
   },
   {
    "name": "bought3",
    "file": "006a6c4c67c5923e2dd4e6da71a42c5a.svg",
    "ext": "svg",
    "rcx": -38,
    "rcy": 18,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 34,
    "h": 34
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 139,
  "y": 47,
  "size": 79,
  "maxSize": 79,
  "direction": 90,
  "visible": false,
  "currentCostume": 9,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 85
 },
 {
  "name": "z death explosion",
  "isStage": false,
  "costumes": [
   {
    "name": "1",
    "file": "0ff0814f0184e13ba2089305275f1f9f.svg",
    "ext": "svg",
    "rcx": 39.99999999999994,
    "rcy": 33,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 74,
    "h": 71
   },
   {
    "name": "2",
    "file": "9fe8831e1670781a19f7ee2cd86a9e45.svg",
    "ext": "svg",
    "rcx": 52,
    "rcy": 7.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 114,
    "h": 58.5
   },
   {
    "name": "3",
    "file": "56791e1d66d625440b3961826d88128b.svg",
    "ext": "svg",
    "rcx": 58.41667000000001,
    "rcy": -17.431369999999987,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 118.08334350585938,
    "h": 39.19363021850586
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 60.10309400515739,
  "y": 132.2268068113458,
  "size": 50,
  "maxSize": 50,
  "direction": 90,
  "visible": false,
  "currentCostume": 2,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 11
 },
 {
  "name": "z death explosion2",
  "isStage": false,
  "costumes": [
   {
    "name": "1",
    "file": "0ff0814f0184e13ba2089305275f1f9f.svg",
    "ext": "svg",
    "rcx": 39.99999999999994,
    "rcy": 33,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 74,
    "h": 71
   },
   {
    "name": "2",
    "file": "9fe8831e1670781a19f7ee2cd86a9e45.svg",
    "ext": "svg",
    "rcx": 52,
    "rcy": 7.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 114,
    "h": 58.5
   },
   {
    "name": "3",
    "file": "56791e1d66d625440b3961826d88128b.svg",
    "ext": "svg",
    "rcx": 58.41667000000001,
    "rcy": -17.431369999999987,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 118.08334350585938,
    "h": 39.19363021850586
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 127.6825435471782,
  "y": -110.5924891671127,
  "size": 50,
  "maxSize": 50,
  "direction": 90,
  "visible": false,
  "currentCostume": 2,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 8
 },
 {
  "name": "z death explosion3",
  "isStage": false,
  "costumes": [
   {
    "name": "1",
    "file": "0ff0814f0184e13ba2089305275f1f9f.svg",
    "ext": "svg",
    "rcx": 39.99999999999994,
    "rcy": 33,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 74,
    "h": 71
   },
   {
    "name": "2",
    "file": "9fe8831e1670781a19f7ee2cd86a9e45.svg",
    "ext": "svg",
    "rcx": 52,
    "rcy": 7.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 114,
    "h": 58.5
   },
   {
    "name": "3",
    "file": "56791e1d66d625440b3961826d88128b.svg",
    "ext": "svg",
    "rcx": 58.41667000000001,
    "rcy": -17.431369999999987,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 118.08334350585938,
    "h": 39.19363021850586
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 120.48042181530073,
  "y": -34.7495811654795,
  "size": 50,
  "maxSize": 50,
  "direction": 90,
  "visible": false,
  "currentCostume": 2,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 7
 },
 {
  "name": "z armor death explosion",
  "isStage": false,
  "costumes": [
   {
    "name": "1",
    "file": "ad5c306ee585866ca7bea7221fd2dd42.svg",
    "ext": "svg",
    "rcx": 67.34117983699002,
    "rcy": 60.12806586638442,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 101.34117889404297,
    "h": 98.12806701660156
   },
   {
    "name": "2",
    "file": "edb0281f6329bcf72f79b369e470f8b5.svg",
    "ext": "svg",
    "rcx": 70.00000369093391,
    "rcy": 39.92688834534249,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 132,
    "h": 96.06031036376953
   },
   {
    "name": "3",
    "file": "3ed1aebdc9dc66dd6421438a9940acf7.svg",
    "ext": "svg",
    "rcx": 58.416655817198176,
    "rcy": 15.021088095275616,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 118.08332824707031,
    "h": 74.05641174316406
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 163.7872415506428,
  "y": -41.219015882958416,
  "size": 50,
  "maxSize": 50,
  "direction": 90,
  "visible": false,
  "currentCostume": 2,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 6
 },
 {
  "name": "boss death explosion",
  "isStage": false,
  "costumes": [
   {
    "name": "1 default",
    "file": "0ff0814f0184e13ba2089305275f1f9f.svg",
    "ext": "svg",
    "rcx": 39.99999999999994,
    "rcy": 33,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 74,
    "h": 71
   },
   {
    "name": "2 default",
    "file": "9fe8831e1670781a19f7ee2cd86a9e45.svg",
    "ext": "svg",
    "rcx": 52,
    "rcy": 7.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 114,
    "h": 58.5
   },
   {
    "name": "3 default",
    "file": "56791e1d66d625440b3961826d88128b.svg",
    "ext": "svg",
    "rcx": 58.41667000000001,
    "rcy": -17.431369999999987,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 118.08334350585938,
    "h": 39.19363021850586
   },
   {
    "name": "1 transfig",
    "file": "1fb8855b69ecfde6986efbe5f6f3ac86.svg",
    "ext": "svg",
    "rcx": 40,
    "rcy": 33,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 74,
    "h": 71
   },
   {
    "name": "2 transfig",
    "file": "a66e45a225123b24bdf055f7d02939ed.svg",
    "ext": "svg",
    "rcx": 52,
    "rcy": 7.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 114,
    "h": 58.5
   },
   {
    "name": "3 transfig",
    "file": "509824da1f023bb738ede6261d58fc5a.svg",
    "ext": "svg",
    "rcx": 58.41666000000001,
    "rcy": -17.431369999999987,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 118.08332824707031,
    "h": 39.19363021850586
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 54.131576660569394,
  "y": 41.824545942249244,
  "size": 90,
  "maxSize": 90,
  "direction": 90,
  "visible": false,
  "currentCostume": 2,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 9
 },
 {
  "name": "mobile mode",
  "isStage": false,
  "costumes": [
   {
    "name": "X",
    "file": "332d62d03324411807014424d1eccbb4.svg",
    "ext": "svg",
    "rcx": 58.87472595967748,
    "rcy": 94.36897750806448,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 117.23970794677734,
    "h": 208.40420532226562
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "change mobile": "false"
  },
  "x": 110,
  "y": -30,
  "size": 60,
  "maxSize": 60,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 42
 },
 {
  "name": "pc mode",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "2a7c2443828b7bd845e455574500b662.svg",
    "ext": "svg",
    "rcx": 90.50729997597307,
    "rcy": 92.73015865073766,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 181.50486755371094,
    "h": 208.68748474121094
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -100,
  "y": -30,
  "size": 60,
  "maxSize": 60,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 62
 },
 {
  "name": "boss warning",
  "isStage": false,
  "costumes": [
   {
    "name": "Alert",
    "file": "b7ce1f4d66bd60f5fedc927d3c466d51.svg",
    "ext": "svg",
    "rcx": 35.31302960956182,
    "rcy": 40.52082975903966,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 70.77989196777344,
    "h": 77.52082824707031
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 74.98026469283708,
  "y": 90.94100329690882,
  "size": 60,
  "maxSize": 60,
  "direction": 79.22244468698413,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "don't rotate",
  "volume": 100,
  "layerOrder": 58
 },
 {
  "name": "modern bow buy",
  "isStage": false,
  "costumes": [
   {
    "name": "50",
    "file": "ac84d0cde2fd6b75444fbfe1795b9fc1.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 157.5,
    "h": 99.41329956054688
   },
   {
    "name": "bougth",
    "file": "6cf9cd259d308afac3f433964e4c0ecf.svg",
    "ext": "svg",
    "rcx": 82.24491500000002,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 167.37818908691406,
    "h": 95.57711029052734
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -59,
  "y": 89,
  "size": 40,
  "maxSize": 50,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 39
 },
 {
  "name": "laser",
  "isStage": false,
  "costumes": [
   {
    "name": "1",
    "file": "5a04a540f1a08b89a84aafa4ffa7e4c4.svg",
    "ext": "svg",
    "rcx": -40.00900900900865,
    "rcy": 12.675224369642166,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 323.6376647949219,
    "h": 24.347579956054688
   },
   {
    "name": "2",
    "file": "656a57d0c0bd67c1a8b306ac0b5d9aae.svg",
    "ext": "svg",
    "rcx": -40.00900999999999,
    "rcy": 14.655890803477092,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 323.6376647949219,
    "h": 25.889240264892578
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 14.020000000000005,
  "y": -14.020000000000008,
  "size": 100,
  "maxSize": 100,
  "direction": 50.43432342485031,
  "visible": false,
  "currentCostume": 1,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 1
 },
 {
  "name": "boss trans",
  "isStage": false,
  "costumes": [
   {
    "name": "idle",
    "file": "779711ba8f4bfe7a975a5ceab2cda69d.svg",
    "ext": "svg",
    "rcx": 46,
    "rcy": 59.54794520547944,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 92,
    "h": 119.09588623046875
   },
   {
    "name": "walk1",
    "file": "27eb5e827d4f43d74526b0e4b06e60c1.svg",
    "ext": "svg",
    "rcx": 46.958092485549145,
    "rcy": 60.175925925925924,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 93.91618347167969,
    "h": 120.35185241699219
   },
   {
    "name": "walk2",
    "file": "2f19b9b0be99214185a091e9526682f9.svg",
    "ext": "svg",
    "rcx": 49.25,
    "rcy": 62.74814814814815,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 98.5,
    "h": 125.49629974365234
   },
   {
    "name": "walk3",
    "file": "b8900cf95a92dec40dae89e16d69791a.svg",
    "ext": "svg",
    "rcx": 46.25,
    "rcy": 59.150000000000006,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 93.5,
    "h": 117.04814910888672
   },
   {
    "name": "walk4",
    "file": "d7824afdb7f803130642c07ba7d2bb97.svg",
    "ext": "svg",
    "rcx": 49.75,
    "rcy": 62.279629629629625,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 99.5,
    "h": 124.55925750732422
   },
   {
    "name": "power",
    "file": "0d3dc7ff1c929bf6efc075e765c76d4b.svg",
    "ext": "svg",
    "rcx": 67.82617947579018,
    "rcy": 34.166175627783105,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 110.68824005126953,
    "h": 94.31423950195312
   },
   {
    "name": "damaged",
    "file": "c88cb947dabce5a9bb95acbb2a36fc61.svg",
    "ext": "svg",
    "rcx": 62.21987309020312,
    "rcy": 33.6778796724696,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 118.0802993774414,
    "h": 100.61280059814453
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "spawn location": "0"
  },
  "x": -44.37682056730022,
  "y": -5.052922048735489,
  "size": 75,
  "maxSize": 75,
  "direction": -139.71407619090385,
  "visible": false,
  "currentCostume": 1,
  "rotationStyle": "left-right",
  "volume": 100,
  "layerOrder": 19
 },
 {
  "name": "fire",
  "isStage": false,
  "costumes": [
   {
    "name": "1",
    "file": "1c6a61fddacebe93d33e2f353648440b.svg",
    "ext": "svg",
    "rcx": 28.953720000000004,
    "rcy": 49.145129999999995,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 57.907440185546875,
    "h": 98.2902603149414
   },
   {
    "name": "2",
    "file": "a1672cb178092cb9c0725def5ced24c7.svg",
    "ext": "svg",
    "rcx": 36.208402500000005,
    "rcy": 58.23206999999999,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 72.41680908203125,
    "h": 116.46414184570312
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -137.0073212162579,
  "y": -114.33347394654407,
  "size": 10,
  "maxSize": 10,
  "direction": 90,
  "visible": false,
  "currentCostume": 1,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 47
 },
 {
  "name": "fire ring",
  "isStage": false,
  "costumes": [
   {
    "name": "1",
    "file": "e4bfe01ed53055a95843645cf3a7e49a.svg",
    "ext": "svg",
    "rcx": 102.04278462327841,
    "rcy": 109.93669519027262,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 211.36268615722656,
    "h": 211.4738311767578
   },
   {
    "name": "2",
    "file": "a3a610e49e6f3e0f247450ae43edc354.svg",
    "ext": "svg",
    "rcx": 109.84830682258058,
    "rcy": 115.5568085032895,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 208.2556915283203,
    "h": 216.73402404785156
   },
   {
    "name": "disappear",
    "file": "206ec32ce92fcf5573d2c066e12af75e.svg",
    "ext": "svg",
    "rcx": 90.61345216412857,
    "rcy": 100.88026203150517,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 198.01820373535156,
    "h": 184.4683074951172
   }
  ],
  "sounds": [],
  "vars": {},
  "x": -44.37682056730022,
  "y": -5.052922048735489,
  "size": 75,
  "maxSize": 75,
  "direction": 90,
  "visible": false,
  "currentCostume": 1,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 12
 },
 {
  "name": "comandos",
  "isStage": false,
  "costumes": [
   {
    "name": "comandos tumbnail",
    "file": "7cb4a0038f1f6c53ccc316bb7b907374.svg",
    "ext": "svg",
    "rcx": 79.5,
    "rcy": 30,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 121.9140625,
    "h": 38
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 36,
  "y": 28,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 48
 },
 {
  "name": "achievments button",
  "isStage": false,
  "costumes": [
   {
    "name": "conquistas",
    "file": "4ee0e4d7d641698d76332f8a606b21b7.svg",
    "ext": "svg",
    "rcx": 50,
    "rcy": 26.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 100,
    "h": 53
   },
   {
    "name": "sair",
    "file": "e5843f9ad8be879ae57270cd60c33e0d.svg",
    "ext": "svg",
    "rcx": 50,
    "rcy": 26.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 100,
    "h": 53
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -50,
  "y": -100,
  "size": 85,
  "maxSize": 85,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 74
 },
 {
  "name": "achievment.1",
  "isStage": false,
  "costumes": [
   {
    "name": "unlocked",
    "file": "ec571e4a6ac6c44264fda19692b6c7f1.svg",
    "ext": "svg",
    "rcx": 73.69307131696425,
    "rcy": 26,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 189.8766632080078,
    "h": 92.89338684082031
   },
   {
    "name": "locked",
    "file": "fdfd40a2d6e282a09350f76c5483c509.svg",
    "ext": "svg",
    "rcx": 63.10495212262214,
    "rcy": 26.072829999999982,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 124.10494995117188,
    "h": 90.02855682373047
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "complete achievment": 0
  },
  "x": -150,
  "y": 115,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 1,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 50
 },
 {
  "name": "achievment.2",
  "isStage": false,
  "costumes": [
   {
    "name": "unlocked",
    "file": "9ec59f8e7ad3a17528a13c54276a5907.svg",
    "ext": "svg",
    "rcx": 89.1263759065601,
    "rcy": 26,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 193.6917266845703,
    "h": 91.84584045410156
   },
   {
    "name": "locked",
    "file": "dd608add3b98695b8c0203a67240c800.svg",
    "ext": "svg",
    "rcx": 61.90641500000001,
    "rcy": 26.07283000000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 129.48484802246094,
    "h": 88.52961730957031
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "complete achievment": 0
  },
  "x": -150,
  "y": 0,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 1,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 51
 },
 {
  "name": "achievment.3",
  "isStage": false,
  "costumes": [
   {
    "name": "unlocked",
    "file": "21e4c5a01f21490abf3302846bad18d1.svg",
    "ext": "svg",
    "rcx": 62.309379999999976,
    "rcy": 26,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 177.41404724121094,
    "h": 101.12428283691406
   },
   {
    "name": "locked",
    "file": "a908f00dc2fc166e0e4d8ed8b245e89b.svg",
    "ext": "svg",
    "rcx": 61,
    "rcy": 26.07283000000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122,
    "h": 102.02774810791016
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "complete achievment": 0
  },
  "x": -150,
  "y": -107,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 1,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 52
 },
 {
  "name": "achievment.4",
  "isStage": false,
  "costumes": [
   {
    "name": "unlocked",
    "file": "5074a01590ad78a7bf58919449d2fb2c.svg",
    "ext": "svg",
    "rcx": 61,
    "rcy": 27.00278499999999,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122,
    "h": 102.95770263671875
   },
   {
    "name": "locked",
    "file": "e4e7dd9dd751c99a7edd885bc1202304.svg",
    "ext": "svg",
    "rcx": 61.000000000000085,
    "rcy": 27.00278499999999,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122,
    "h": 102.95770263671875
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "complete achievment": 0,
   "achievments open": 0
  },
  "x": 25,
  "y": 115,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 1,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 56
 },
 {
  "name": "achievment.5",
  "isStage": false,
  "costumes": [
   {
    "name": "unlocked",
    "file": "2a817747c35b07d4384645498c7cbe50.svg",
    "ext": "svg",
    "rcx": 61,
    "rcy": 26,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 203.7918701171875,
    "h": 104.0796127319336
   },
   {
    "name": "locked",
    "file": "f577d78d533da1f8ac0323ceac626ddd.svg",
    "ext": "svg",
    "rcx": 61.00000000000003,
    "rcy": 26.07283000000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122,
    "h": 86.24537658691406
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "complete achievment": 0
  },
  "x": 25,
  "y": 0,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 1,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 55
 },
 {
  "name": "achievment.6",
  "isStage": false,
  "costumes": [
   {
    "name": "unlocked",
    "file": "bb6f6c564ed3a9e3d160e1d58e4f3750.svg",
    "ext": "svg",
    "rcx": 61,
    "rcy": 26,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 198.74746704101562,
    "h": 102.00985717773438
   },
   {
    "name": "locked",
    "file": "1f4ad2082804cc6f09edfebcc464afbb.svg",
    "ext": "svg",
    "rcx": 61,
    "rcy": 26.07283000000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122,
    "h": 86.24537658691406
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "complete achievment": 0
  },
  "x": 25,
  "y": -107,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 1,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 54
 },
 {
  "name": "page changer up",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "437f9470d64dc9479dd54fb7ff8caf52.svg",
    "ext": "svg",
    "rcx": 32.5,
    "rcy": 32.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 65,
    "h": 65
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 206,
  "y": 151,
  "size": 70,
  "maxSize": 70,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 61
 },
 {
  "name": "page changer up2",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "fd5d56aa075e452de3492d5c4f544fc2.svg",
    "ext": "svg",
    "rcx": 32.5,
    "rcy": 32.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 65,
    "h": 65
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 158,
  "y": 151,
  "size": 70,
  "maxSize": 70,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 57
 },
 {
  "name": "achievment.7",
  "isStage": false,
  "costumes": [
   {
    "name": "unlocked",
    "file": "ae42584d0e679ce2d46ba2529c166626.svg",
    "ext": "svg",
    "rcx": 74.86988008928569,
    "rcy": 26,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 203.51654052734375,
    "h": 92.4871597290039
   },
   {
    "name": "locked",
    "file": "afe1a626f17fa16aa5afa985a17396b5.svg",
    "ext": "svg",
    "rcx": 61.978094999999996,
    "rcy": 26.07283000000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122.97810363769531,
    "h": 82.27449798583984
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "complete achievment": 0
  },
  "x": 25,
  "y": 115,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 1,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 72
 },
 {
  "name": "boss hipnotiser",
  "isStage": false,
  "costumes": [
   {
    "name": "idle",
    "file": "7488f3f6c2c4ed9de6cb1d1650b82a27.svg",
    "ext": "svg",
    "rcx": 44.90818096011611,
    "rcy": 77.03268442063707,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 89.81719970703125,
    "h": 154.0659942626953
   },
   {
    "name": "walk",
    "file": "11a82c62d9f21d8d39d3e00a65958ae6.svg",
    "ext": "svg",
    "rcx": 44.90860000000001,
    "rcy": 77.033,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 89.81719970703125,
    "h": 154.0659942626953
   },
   {
    "name": "walk2",
    "file": "52446486e418231070a418dd1acca644.svg",
    "ext": "svg",
    "rcx": 53.476458514451735,
    "rcy": 74.71895162787037,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 98.92442321777344,
    "h": 149.35647583007812
   },
   {
    "name": "Charge1",
    "file": "9d32c15fea7f5a37eef29c7789b3c460.svg",
    "ext": "svg",
    "rcx": 45.889519999999976,
    "rcy": 78.71559999999997,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 91.77903747558594,
    "h": 157.4311981201172
   },
   {
    "name": "Charge2",
    "file": "7f87c168d250fdd71809ee3431885869.svg",
    "ext": "svg",
    "rcx": 60.448950000000025,
    "rcy": 79.59111749999997,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 120.89790344238281,
    "h": 159.18223571777344
   },
   {
    "name": "Charge3",
    "file": "bb07d4452f6230547cf4cf486137edfa.svg",
    "ext": "svg",
    "rcx": 45.46618999999998,
    "rcy": 75.99823,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 90.93238067626953,
    "h": 151.9964599609375
   },
   {
    "name": "Charge4",
    "file": "2962fab0966feb2f02a9dbc02fcf909c.svg",
    "ext": "svg",
    "rcx": 45.677854999999965,
    "rcy": 76.352035,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 91.355712890625,
    "h": 152.70407104492188
   },
   {
    "name": "Attack",
    "file": "dedf1c9353b1d854b39e503b5590bd74.svg",
    "ext": "svg",
    "rcx": 56.82414846153844,
    "rcy": 80.93496277472524,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 161.05679321289062,
    "h": 164.4121551513672
   },
   {
    "name": "damaged",
    "file": "269cb515400b16732ce229387bcc85bb.svg",
    "ext": "svg",
    "rcx": 58.59519886003616,
    "rcy": 83.75707474321773,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 162.82785034179688,
    "h": 167.2342529296875
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "spawn location": 1
  },
  "x": 6.564212647166624,
  "y": 23.780635449984356,
  "size": 75,
  "maxSize": 75,
  "direction": -113.83927108043787,
  "visible": false,
  "currentCostume": 2,
  "rotationStyle": "left-right",
  "volume": 100,
  "layerOrder": 21
 },
 {
  "name": "hipno laser",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "96dff56360b2bd2c6eb4e3e010ebc08f.svg",
    "ext": "svg",
    "rcx": -16.042649005802332,
    "rcy": 79.67028343582096,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 251.37399291992188,
    "h": 143.99757385253906
   }
  ],
  "sounds": [],
  "vars": {},
  "x": 6.564212647166624,
  "y": 48.78063544998436,
  "size": 100,
  "maxSize": 100,
  "direction": -172.3359776270367,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 73
 },
 {
  "name": "achievment.8",
  "isStage": false,
  "costumes": [
   {
    "name": "locked",
    "file": "d2a7f2b0b2c6a4bbda162d2abf47c17e.svg",
    "ext": "svg",
    "rcx": 61.52714473026671,
    "rcy": 26.07283000000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122.52713775634766,
    "h": 81.00518798828125
   },
   {
    "name": "unlocked",
    "file": "58f0db08218af1e05a7a7a83be2f0199.svg",
    "ext": "svg",
    "rcx": 61.527150000000006,
    "rcy": 25.999965000000003,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 182.94146728515625,
    "h": 102.00981903076172
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -150,
  "y": 115,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 59
 },
 {
  "name": "achievment.9",
  "isStage": false,
  "costumes": [
   {
    "name": "unlocked",
    "file": "0cd91607f3eb57cdbf7b4a5b8e13a81a.svg",
    "ext": "svg",
    "rcx": 61,
    "rcy": 26,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 216.88731384277344,
    "h": 102.15705871582031
   },
   {
    "name": "locked",
    "file": "0f2f9d60fe65f2aa5b28e7a2edea081a.svg",
    "ext": "svg",
    "rcx": 61.12133500000007,
    "rcy": 26.107349999999997,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 132.15066528320312,
    "h": 102.26441192626953
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "complete achievment": 0
  },
  "x": -150,
  "y": 0,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 1,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 53
 },
 {
  "name": "achievment.10",
  "isStage": false,
  "costumes": [
   {
    "name": "unlocked",
    "file": "6e19e440661c6f1ef5bb586a70843024.svg",
    "ext": "svg",
    "rcx": 61,
    "rcy": 26,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122,
    "h": 102.15705871582031
   },
   {
    "name": "locked",
    "file": "136668668c51ba11d419153dcdd0adef.svg",
    "ext": "svg",
    "rcx": 61.1213349999999,
    "rcy": 26.107349999999997,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122.24266815185547,
    "h": 102.26441192626953
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "complete achievment": 0
  },
  "x": -150,
  "y": -107,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 1,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 71
 },
 {
  "name": "Curse Avatar buy",
  "isStage": false,
  "costumes": [
   {
    "name": "100",
    "file": "f3028a794ff39760d27e4a707b8b2028.svg",
    "ext": "svg",
    "rcx": 88.31586900452484,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 169.80557250976562,
    "h": 94.93773651123047
   },
   {
    "name": "bougth",
    "file": "2e9e8d3c6a07c169a3d45092dce2d154.svg",
    "ext": "svg",
    "rcx": 82.24491500000002,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 167.37818908691406,
    "h": 95.57711029052734
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "heal chance": 22
  },
  "x": -59,
  "y": -1,
  "size": 40,
  "maxSize": 50,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 38
 },
 {
  "name": "designs",
  "isStage": false,
  "costumes": [
   {
    "name": "designs tumbnail",
    "file": "f0618344e2a0b1ef02231ecfc0efe4f6.svg",
    "ext": "svg",
    "rcx": 91.54287203830648,
    "rcy": 109.16908657661293,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 182.28802490234375,
    "h": 163.91183471679688
   }
  ],
  "sounds": [],
  "vars": {},
  "x": 36,
  "y": 28,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 60
 },
 {
  "name": "souls number",
  "isStage": false,
  "costumes": [
   {
    "name": "soul-",
    "file": "576aeb8905e0b5685794e01ca28d417a.svg",
    "ext": "svg",
    "rcx": 0,
    "rcy": 0,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 0,
    "h": 0
   },
   {
    "name": "soul-0",
    "file": "722682915f3d3d1617dbe71107b1f04c.svg",
    "ext": "svg",
    "rcx": 29.000123261025976,
    "rcy": 39.00021967188508,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 58.86212158203125,
    "h": 78.2242202758789
   },
   {
    "name": "soul-1",
    "file": "913d6ca78a74a83752733bdc8e2ce967.svg",
    "ext": "svg",
    "rcx": 23.999890921288625,
    "rcy": 39,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 48.57255172729492,
    "h": 79.97000122070312
   },
   {
    "name": "soul-2",
    "file": "e3a259d6c99da09e3c54d0bf2eece705.svg",
    "ext": "svg",
    "rcx": 28,
    "rcy": 40.999841125216534,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 57.27000045776367,
    "h": 83.75685119628906
   },
   {
    "name": "soul-3",
    "file": "ccee36d44e74ff13276ddd03ffe88980.svg",
    "ext": "svg",
    "rcx": 33,
    "rcy": 42,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 66.06999969482422,
    "h": 84.29000091552734
   },
   {
    "name": "soul-4",
    "file": "4d3275329c8975647576396c47ea23c7.svg",
    "ext": "svg",
    "rcx": 31.000174274914286,
    "rcy": 38.00034955326893,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 62.552181243896484,
    "h": 76.99433898925781
   },
   {
    "name": "soul-5",
    "file": "9c04b104592f20a5dbb4a505cee1983b.svg",
    "ext": "svg",
    "rcx": 30.000332309745517,
    "rcy": 38,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 61.204341888427734,
    "h": 77.68000030517578
   },
   {
    "name": "soul-6",
    "file": "03aa3b2b6721f532a82c553283311844.svg",
    "ext": "svg",
    "rcx": 30,
    "rcy": 37,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 60.21772003173828,
    "h": 75.91999816894531
   },
   {
    "name": "soul-7",
    "file": "62df0902cabcc15eeb091e6598c08411.svg",
    "ext": "svg",
    "rcx": 31.00008118172309,
    "rcy": 42,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 63.41609191894531,
    "h": 85.70999908447266
   },
   {
    "name": "soul-8",
    "file": "e79e8e71d8aed9d819d3eea06abb2503.svg",
    "ext": "svg",
    "rcx": 31,
    "rcy": 37,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 62.53190994262695,
    "h": 74
   },
   {
    "name": "soul-9",
    "file": "dea497d4520f99337a13e182f5efaed2.svg",
    "ext": "svg",
    "rcx": 27.99965487952366,
    "rcy": 35.999926096063746,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 57.32365036010742,
    "h": 72.85391998291016
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "index": 5
  },
  "x": -115,
  "y": 161,
  "size": 40,
  "maxSize": 40,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 26
 },
 {
  "name": "souls sign",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "59026ad0e57165e70d517fbb798a6694.svg",
    "ext": "svg",
    "rcx": 16.069259999999986,
    "rcy": 15.668454999999994,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 32.138519287109375,
    "h": 31.336910247802734
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -225,
  "y": 160,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 25
 },
 {
  "name": "bow kills sign",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "9a2e800dc3903a16ecf4a4cf08099b68.svg",
    "ext": "svg",
    "rcx": 20.47759760112561,
    "rcy": 29.051619556269316,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 40.9552001953125,
    "h": 58.103240966796875
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 74,
  "y": -86,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 82
 },
 {
  "name": "bow kills number",
  "isStage": false,
  "costumes": [
   {
    "name": "soul-",
    "file": "576aeb8905e0b5685794e01ca28d417a.svg",
    "ext": "svg",
    "rcx": 0,
    "rcy": 0,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 0,
    "h": 0
   },
   {
    "name": "soul-0",
    "file": "722682915f3d3d1617dbe71107b1f04c.svg",
    "ext": "svg",
    "rcx": 29.000123261025976,
    "rcy": 39.00021967188508,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 58.86212158203125,
    "h": 78.2242202758789
   },
   {
    "name": "soul-1",
    "file": "913d6ca78a74a83752733bdc8e2ce967.svg",
    "ext": "svg",
    "rcx": 23.999890921288625,
    "rcy": 39,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 48.57255172729492,
    "h": 79.97000122070312
   },
   {
    "name": "soul-2",
    "file": "e3a259d6c99da09e3c54d0bf2eece705.svg",
    "ext": "svg",
    "rcx": 28,
    "rcy": 40.999841125216534,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 57.27000045776367,
    "h": 83.75685119628906
   },
   {
    "name": "soul-3",
    "file": "ccee36d44e74ff13276ddd03ffe88980.svg",
    "ext": "svg",
    "rcx": 33,
    "rcy": 42,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 66.06999969482422,
    "h": 84.29000091552734
   },
   {
    "name": "soul-4",
    "file": "4d3275329c8975647576396c47ea23c7.svg",
    "ext": "svg",
    "rcx": 31.000174274914286,
    "rcy": 38.00034955326893,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 62.552181243896484,
    "h": 76.99433898925781
   },
   {
    "name": "soul-5",
    "file": "9c04b104592f20a5dbb4a505cee1983b.svg",
    "ext": "svg",
    "rcx": 30.000332309745517,
    "rcy": 38,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 61.204341888427734,
    "h": 77.68000030517578
   },
   {
    "name": "soul-6",
    "file": "03aa3b2b6721f532a82c553283311844.svg",
    "ext": "svg",
    "rcx": 30,
    "rcy": 37,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 60.21772003173828,
    "h": 75.91999816894531
   },
   {
    "name": "soul-7",
    "file": "62df0902cabcc15eeb091e6598c08411.svg",
    "ext": "svg",
    "rcx": 31.00008118172309,
    "rcy": 42,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 63.41609191894531,
    "h": 85.70999908447266
   },
   {
    "name": "soul-8",
    "file": "e79e8e71d8aed9d819d3eea06abb2503.svg",
    "ext": "svg",
    "rcx": 31,
    "rcy": 37,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 62.53190994262695,
    "h": 74
   },
   {
    "name": "soul-9",
    "file": "dea497d4520f99337a13e182f5efaed2.svg",
    "ext": "svg",
    "rcx": 27.99965487952366,
    "rcy": 35.999926096063746,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 57.32365036010742,
    "h": 72.85391998291016
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "index": 5
  },
  "x": 188,
  "y": -87,
  "size": 40,
  "maxSize": 40,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 83
 },
 {
  "name": "boss apear ",
  "isStage": false,
  "costumes": [
   {
    "name": "start",
    "file": "6e422fabaeadd2010a368a7165c86a2f.svg",
    "ext": "svg",
    "rcx": 327.5,
    "rcy": 247,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 668,
    "h": 494
   },
   {
    "name": "frame.1",
    "file": "1056d9bce5a5898adeb272b364e6cc03.svg",
    "ext": "svg",
    "rcx": 327.5,
    "rcy": 247,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 668,
    "h": 494
   },
   {
    "name": "frame.2",
    "file": "a2994bb7dab98294972507b029276299.svg",
    "ext": "svg",
    "rcx": 439.55618802674667,
    "rcy": 306.21293076773736,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 759.1123657226562,
    "h": 636.4258422851562
   },
   {
    "name": "frame.3",
    "file": "b292fb73a541ee18593310f3d47d5a63.svg",
    "ext": "svg",
    "rcx": 439.5874925715327,
    "rcy": 307.19135587658434,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 760.1675415039062,
    "h": 637.3768310546875
   },
   {
    "name": "frame.4",
    "file": "33d4263ebef369c41fe5e088a2c46b38.svg",
    "ext": "svg",
    "rcx": 439.58749014073703,
    "rcy": 307.1913467552611,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 760.1675415039062,
    "h": 637.3768310546875
   },
   {
    "name": "frame.5",
    "file": "015c39ba77599b11d73e2e8f4489664f.svg",
    "ext": "svg",
    "rcx": 439.58749528147405,
    "rcy": 307.1913485105223,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 760.1675415039062,
    "h": 637.3768310546875
   },
   {
    "name": "brute appear",
    "file": "375c1efcb3523bb9e01104a549800762.svg",
    "ext": "svg",
    "rcx": 439.5874875703685,
    "rcy": 307.19134587763057,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 760.1675415039062,
    "h": 637.3768310546875
   },
   {
    "name": "transfigured appear",
    "file": "170e0d79ac170ef1bd462f7b4e36f885.svg",
    "ext": "svg",
    "rcx": 419.08749257036885,
    "rcy": 287.6913608776306,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 760.1675415039062,
    "h": 637.3768310546875
   },
   {
    "name": "hipnotiser appear",
    "file": "f771a79ce3af14d96d51b8bdf822c02d.svg",
    "ext": "svg",
    "rcx": 434.58748271110557,
    "rcy": 302.19134763289173,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 760.1675415039062,
    "h": 637.3768310546875
   },
   {
    "name": "P",
    "file": "ce888ee96530611d2db75949c051d635.png",
    "ext": "png",
    "rcx": 254.5,
    "rcy": 360,
    "res": 2,
    "vx": 0,
    "vy": 0,
    "w": 509,
    "h": 720
   }
  ],
  "sounds": [
   {
    "name": "boss appear",
    "file": "4df41bfee50d0bb2e0995449474264f8.wav",
    "rate": 48000,
    "samples": 145485
   },
   {
    "name": "O mais próximo de nós se foi",
    "file": "32fb2f6c782396961c97a4b548f03556.mp3",
    "rate": 48000,
    "samples": 9437448
   },
   {
    "name": "Pura Força Bruta",
    "file": "7202653cf4383cf25a545e567d9e68d2.mp3",
    "rate": 48000,
    "samples": 9911039
   },
   {
    "name": "Dança da Sereia",
    "file": "d0cd2e2505eed731f5ec3a3d2bb989ef.mp3",
    "rate": 48000,
    "samples": 8826888
   }
  ],
  "vars": {},
  "x": 29,
  "y": 11,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 8,
  "rotationStyle": "all around",
  "volume": 0,
  "layerOrder": 94
 },
 {
  "name": "bat kills sign",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "6e94b15dff68226be9d79b57247e67b1.svg",
    "ext": "svg",
    "rcx": 21.83079585959365,
    "rcy": 30.980534748293934,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 43.661590576171875,
    "h": 61.9610710144043
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -106,
  "y": -82,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 81
 },
 {
  "name": "bat kills number",
  "isStage": false,
  "costumes": [
   {
    "name": "soul-",
    "file": "576aeb8905e0b5685794e01ca28d417a.svg",
    "ext": "svg",
    "rcx": 0,
    "rcy": 0,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 0,
    "h": 0
   },
   {
    "name": "soul-0",
    "file": "722682915f3d3d1617dbe71107b1f04c.svg",
    "ext": "svg",
    "rcx": 29.000123261025976,
    "rcy": 39.00021967188508,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 58.86212158203125,
    "h": 78.2242202758789
   },
   {
    "name": "soul-1",
    "file": "913d6ca78a74a83752733bdc8e2ce967.svg",
    "ext": "svg",
    "rcx": 23.999890921288625,
    "rcy": 39,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 48.57255172729492,
    "h": 79.97000122070312
   },
   {
    "name": "soul-2",
    "file": "e3a259d6c99da09e3c54d0bf2eece705.svg",
    "ext": "svg",
    "rcx": 28,
    "rcy": 40.999841125216534,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 57.27000045776367,
    "h": 83.75685119628906
   },
   {
    "name": "soul-3",
    "file": "ccee36d44e74ff13276ddd03ffe88980.svg",
    "ext": "svg",
    "rcx": 33,
    "rcy": 42,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 66.06999969482422,
    "h": 84.29000091552734
   },
   {
    "name": "soul-4",
    "file": "4d3275329c8975647576396c47ea23c7.svg",
    "ext": "svg",
    "rcx": 31.000174274914286,
    "rcy": 38.00034955326893,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 62.552181243896484,
    "h": 76.99433898925781
   },
   {
    "name": "soul-5",
    "file": "9c04b104592f20a5dbb4a505cee1983b.svg",
    "ext": "svg",
    "rcx": 30.000332309745517,
    "rcy": 38,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 61.204341888427734,
    "h": 77.68000030517578
   },
   {
    "name": "soul-6",
    "file": "03aa3b2b6721f532a82c553283311844.svg",
    "ext": "svg",
    "rcx": 30,
    "rcy": 37,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 60.21772003173828,
    "h": 75.91999816894531
   },
   {
    "name": "soul-7",
    "file": "62df0902cabcc15eeb091e6598c08411.svg",
    "ext": "svg",
    "rcx": 31.00008118172309,
    "rcy": 42,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 63.41609191894531,
    "h": 85.70999908447266
   },
   {
    "name": "soul-8",
    "file": "e79e8e71d8aed9d819d3eea06abb2503.svg",
    "ext": "svg",
    "rcx": 31,
    "rcy": 37,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 62.53190994262695,
    "h": 74
   },
   {
    "name": "soul-9",
    "file": "dea497d4520f99337a13e182f5efaed2.svg",
    "ext": "svg",
    "rcx": 27.99965487952366,
    "rcy": 35.999926096063746,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 57.32365036010742,
    "h": 72.85391998291016
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "index": 5
  },
  "x": 8,
  "y": -80,
  "size": 40,
  "maxSize": 40,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 80
 },
 {
  "name": "tips",
  "isStage": false,
  "costumes": [
   {
    "name": "1",
    "file": "dd68427ef093944311064f12e4c2da4e.svg",
    "ext": "svg",
    "rcx": 79.861328125,
    "rcy": 37.51875000000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 181.171875,
    "h": 96.6500015258789
   },
   {
    "name": "2",
    "file": "d4a2ab26812dd8184b32f417f3971ac1.svg",
    "ext": "svg",
    "rcx": 79.14681387096778,
    "rcy": 37.51875000000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 183.80859375,
    "h": 120.01049041748047
   },
   {
    "name": "3",
    "file": "b57ca76089454e8329dddc4efc96d8ab.svg",
    "ext": "svg",
    "rcx": 77.36133000000001,
    "rcy": 37.51875000000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 178.25,
    "h": 96.6500015258789
   },
   {
    "name": "4",
    "file": "e856f300d91a2a69e6d6da8d636b28ed.svg",
    "ext": "svg",
    "rcx": 78.36133000000001,
    "rcy": 37.51875000000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 213.39996337890625,
    "h": 119
   },
   {
    "name": "5",
    "file": "a5622b22798f53e95af722fd68fbac69.svg",
    "ext": "svg",
    "rcx": 79.86133000000001,
    "rcy": 37.51875000000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 190.41015625,
    "h": 98.5
   },
   {
    "name": "6",
    "file": "88a54bc08a7513de518493eb1db2266c.svg",
    "ext": "svg",
    "rcx": 78.86133000000001,
    "rcy": 37.51875000000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 223.8125,
    "h": 122.5
   },
   {
    "name": "7",
    "file": "e4726c14ebab9034342480cd5ab4e086.svg",
    "ext": "svg",
    "rcx": 78.60849244103775,
    "rcy": 37.51875000000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 216.5625,
    "h": 122.5
   },
   {
    "name": "8",
    "file": "bd771b3f4359f25e0a23483f6ba1df7c.svg",
    "ext": "svg",
    "rcx": 78.60848999999999,
    "rcy": 37.51875000000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 193.140625,
    "h": 98.5
   },
   {
    "name": "9",
    "file": "6caf89b0c7aafd7eccf0c12832ca75e7.svg",
    "ext": "svg",
    "rcx": 78.60848999999999,
    "rcy": 37.51875000000001,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 183.75,
    "h": 122.5
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -6,
  "y": 129,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 78
 },
 {
  "name": "bleeding indicator",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "e51e7206ab89df102e4681c24e13a0e0.svg",
    "ext": "svg",
    "rcx": 77.00000000000006,
    "rcy": 38,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 178,
    "h": 56
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 286,
  "y": 28,
  "size": 80,
  "maxSize": 80,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 63
 },
 {
  "name": "bleed sec number",
  "isStage": false,
  "costumes": [
   {
    "name": "soul-",
    "file": "576aeb8905e0b5685794e01ca28d417a.svg",
    "ext": "svg",
    "rcx": 0,
    "rcy": 0,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 0,
    "h": 0
   },
   {
    "name": "soul-0",
    "file": "722682915f3d3d1617dbe71107b1f04c.svg",
    "ext": "svg",
    "rcx": 29.000123261025976,
    "rcy": 39.00021967188508,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 58.86212158203125,
    "h": 78.2242202758789
   },
   {
    "name": "soul-1",
    "file": "913d6ca78a74a83752733bdc8e2ce967.svg",
    "ext": "svg",
    "rcx": 23.999890921288625,
    "rcy": 39,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 48.57255172729492,
    "h": 79.97000122070312
   },
   {
    "name": "soul-2",
    "file": "e3a259d6c99da09e3c54d0bf2eece705.svg",
    "ext": "svg",
    "rcx": 28,
    "rcy": 40.999841125216534,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 57.27000045776367,
    "h": 83.75685119628906
   },
   {
    "name": "soul-3",
    "file": "ccee36d44e74ff13276ddd03ffe88980.svg",
    "ext": "svg",
    "rcx": 33,
    "rcy": 42,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 66.06999969482422,
    "h": 84.29000091552734
   },
   {
    "name": "soul-4",
    "file": "4d3275329c8975647576396c47ea23c7.svg",
    "ext": "svg",
    "rcx": 31.000174274914286,
    "rcy": 38.00034955326893,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 62.552181243896484,
    "h": 76.99433898925781
   },
   {
    "name": "soul-5",
    "file": "9c04b104592f20a5dbb4a505cee1983b.svg",
    "ext": "svg",
    "rcx": 30.000332309745517,
    "rcy": 38,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 61.204341888427734,
    "h": 77.68000030517578
   },
   {
    "name": "soul-6",
    "file": "03aa3b2b6721f532a82c553283311844.svg",
    "ext": "svg",
    "rcx": 30,
    "rcy": 37,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 60.21772003173828,
    "h": 75.91999816894531
   },
   {
    "name": "soul-7",
    "file": "62df0902cabcc15eeb091e6598c08411.svg",
    "ext": "svg",
    "rcx": 31.00008118172309,
    "rcy": 42,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 63.41609191894531,
    "h": 85.70999908447266
   },
   {
    "name": "soul-8",
    "file": "e79e8e71d8aed9d819d3eea06abb2503.svg",
    "ext": "svg",
    "rcx": 31,
    "rcy": 37,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 62.53190994262695,
    "h": 74
   },
   {
    "name": "soul-9",
    "file": "dea497d4520f99337a13e182f5efaed2.svg",
    "ext": "svg",
    "rcx": 27.99965487952366,
    "rcy": 35.999926096063746,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 57.32365036010742,
    "h": 72.85391998291016
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "index": 3
  },
  "x": 240,
  "y": 39,
  "size": 30,
  "maxSize": 30,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 87
 },
 {
  "name": "bleed particles",
  "isStage": false,
  "costumes": [
   {
    "name": "1",
    "file": "43ea6f8fe35df03c788335a11fc85af7.svg",
    "ext": "svg",
    "rcx": 44.64684312364818,
    "rcy": 15.867842841135882,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 84.71605682373047,
    "h": 51.88108825683594
   },
   {
    "name": "2",
    "file": "bba5e6de59d9df4c323f17b6fa09df59.svg",
    "ext": "svg",
    "rcx": 61.883691858845395,
    "rcy": 20.867821254474734,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 101.34464263916016,
    "h": 78.65647888183594
   },
   {
    "name": "3",
    "file": "2875fbcf5ddd0a9d46d0b129c5d9facd.svg",
    "ext": "svg",
    "rcx": 41.17090050992954,
    "rcy": -20.604041985936163,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 78.33332824707031,
    "h": 36.66666030883789
   },
   {
    "name": "3.2",
    "file": "a54ad79a2936db78ab039985718a3123.svg",
    "ext": "svg",
    "rcx": 41.17090999999999,
    "rcy": -20.604039999999998,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 78.33334350585938,
    "h": 36.66666030883789
   }
  ],
  "sounds": [],
  "vars": {
   "blood splatter chance": "other"
  },
  "x": -26.983511441685607,
  "y": 10.309017898163518,
  "size": 30,
  "maxSize": 30,
  "direction": 90,
  "visible": false,
  "currentCostume": 3,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 64
 },
 {
  "name": "brute healthbar",
  "isStage": false,
  "costumes": [
   {
    "name": "base",
    "file": "d11993479446d9ac99291d0f1f1136ee.svg",
    "ext": "svg",
    "rcx": 24,
    "rcy": 4,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 48,
    "h": 17.529630661010742
   },
   {
    "name": "empty",
    "file": "365249d084e4c6cce563ba0650a7ace4.png",
    "ext": "png",
    "rcx": 46,
    "rcy": 8,
    "res": 2,
    "vx": 0,
    "vy": 0,
    "w": 46,
    "h": 16
   },
   {
    "name": "full",
    "file": "310f58c91bd1e17fffb61484fba47488.png",
    "ext": "png",
    "rcx": 92,
    "rcy": 8,
    "res": 2,
    "vx": 0,
    "vy": 0,
    "w": 46,
    "h": 16
   },
   {
    "name": "big [shot]",
    "file": "4ecaf903067f90f21195ec613b1f9947.svg",
    "ext": "svg",
    "rcx": 248.5,
    "rcy": 182,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 508,
    "h": 373
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "bar width": 161,
   "bar %": 1,
   "hp max": "10"
  },
  "x": 174,
  "y": 160,
  "size": 350,
  "maxSize": 350,
  "direction": 90,
  "visible": false,
  "currentCostume": 2,
  "rotationStyle": "don't rotate",
  "volume": 100,
  "layerOrder": 91
 },
 {
  "name": "transfig healthbar",
  "isStage": false,
  "costumes": [
   {
    "name": "base",
    "file": "8a16561ed831c0ccf226c96679029530.svg",
    "ext": "svg",
    "rcx": 33.169494999999955,
    "rcy": 4,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 67.25904846191406,
    "h": 18.563690185546875
   },
   {
    "name": "empty",
    "file": "365249d084e4c6cce563ba0650a7ace4.png",
    "ext": "png",
    "rcx": 46,
    "rcy": 8,
    "res": 2,
    "vx": 0,
    "vy": 0,
    "w": 46,
    "h": 16
   },
   {
    "name": "full",
    "file": "310f58c91bd1e17fffb61484fba47488.png",
    "ext": "png",
    "rcx": 92,
    "rcy": 8,
    "res": 2,
    "vx": 0,
    "vy": 0,
    "w": 46,
    "h": 16
   },
   {
    "name": "big [shot]",
    "file": "4ecaf903067f90f21195ec613b1f9947.svg",
    "ext": "svg",
    "rcx": 248.5,
    "rcy": 182,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 508,
    "h": 373
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "bar width": 161,
   "bar %": 0.9,
   "hp max": "10"
  },
  "x": 157.9,
  "y": 160,
  "size": 350,
  "maxSize": 350,
  "direction": 90,
  "visible": false,
  "currentCostume": 2,
  "rotationStyle": "don't rotate",
  "volume": 100,
  "layerOrder": 92
 },
 {
  "name": "hipno healthbar",
  "isStage": false,
  "costumes": [
   {
    "name": "base",
    "file": "8a9dafc2f664462dc3346624daace286.svg",
    "ext": "svg",
    "rcx": 30.794499999999942,
    "rcy": 4,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 63.1243782043457,
    "h": 18.777700424194336
   },
   {
    "name": "empty",
    "file": "365249d084e4c6cce563ba0650a7ace4.png",
    "ext": "png",
    "rcx": 46,
    "rcy": 8,
    "res": 2,
    "vx": 0,
    "vy": 0,
    "w": 46,
    "h": 16
   },
   {
    "name": "full",
    "file": "310f58c91bd1e17fffb61484fba47488.png",
    "ext": "png",
    "rcx": 92,
    "rcy": 8,
    "res": 2,
    "vx": 0,
    "vy": 0,
    "w": 46,
    "h": 16
   },
   {
    "name": "big [shot]",
    "file": "4ecaf903067f90f21195ec613b1f9947.svg",
    "ext": "svg",
    "rcx": 248.5,
    "rcy": 182,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 508,
    "h": 373
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "bar width": 161,
   "bar %": 0,
   "hp max": "10"
  },
  "x": 13,
  "y": 160,
  "size": 350,
  "maxSize": 350,
  "direction": 90,
  "visible": false,
  "currentCostume": 1,
  "rotationStyle": "don't rotate",
  "volume": 100,
  "layerOrder": 93
 },
 {
  "name": "on fire effect",
  "isStage": false,
  "costumes": [
   {
    "name": "1",
    "file": "38bbdc50867890ae28b801499571bdab.svg",
    "ext": "svg",
    "rcx": 14.225037829457364,
    "rcy": 24.145129999999995,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 28.45008087158203,
    "h": 48.290260314941406
   },
   {
    "name": "2",
    "file": "8e44141441e3ff55fedb3cdca20b9e3a.svg",
    "ext": "svg",
    "rcx": 17.20864499999999,
    "rcy": 27.67575896907215,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 34.41728973388672,
    "h": 55.35152053833008
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "blood splatter chance": "other"
  },
  "x": 5,
  "y": 42,
  "size": 80,
  "maxSize": 80,
  "direction": 90,
  "visible": false,
  "currentCostume": 1,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 65
 },
 {
  "name": "on fire sec number",
  "isStage": false,
  "costumes": [
   {
    "name": "soul-",
    "file": "576aeb8905e0b5685794e01ca28d417a.svg",
    "ext": "svg",
    "rcx": 0,
    "rcy": 0,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 0,
    "h": 0
   },
   {
    "name": "soul-0",
    "file": "722682915f3d3d1617dbe71107b1f04c.svg",
    "ext": "svg",
    "rcx": 29.000123261025976,
    "rcy": 39.00021967188508,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 58.86212158203125,
    "h": 78.2242202758789
   },
   {
    "name": "soul-1",
    "file": "913d6ca78a74a83752733bdc8e2ce967.svg",
    "ext": "svg",
    "rcx": 23.999890921288625,
    "rcy": 39,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 48.57255172729492,
    "h": 79.97000122070312
   },
   {
    "name": "soul-2",
    "file": "e3a259d6c99da09e3c54d0bf2eece705.svg",
    "ext": "svg",
    "rcx": 28,
    "rcy": 40.999841125216534,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 57.27000045776367,
    "h": 83.75685119628906
   },
   {
    "name": "soul-3",
    "file": "ccee36d44e74ff13276ddd03ffe88980.svg",
    "ext": "svg",
    "rcx": 33,
    "rcy": 42,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 66.06999969482422,
    "h": 84.29000091552734
   },
   {
    "name": "soul-4",
    "file": "4d3275329c8975647576396c47ea23c7.svg",
    "ext": "svg",
    "rcx": 31.000174274914286,
    "rcy": 38.00034955326893,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 62.552181243896484,
    "h": 76.99433898925781
   },
   {
    "name": "soul-5",
    "file": "9c04b104592f20a5dbb4a505cee1983b.svg",
    "ext": "svg",
    "rcx": 30.000332309745517,
    "rcy": 38,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 61.204341888427734,
    "h": 77.68000030517578
   },
   {
    "name": "soul-6",
    "file": "03aa3b2b6721f532a82c553283311844.svg",
    "ext": "svg",
    "rcx": 30,
    "rcy": 37,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 60.21772003173828,
    "h": 75.91999816894531
   },
   {
    "name": "soul-7",
    "file": "62df0902cabcc15eeb091e6598c08411.svg",
    "ext": "svg",
    "rcx": 31.00008118172309,
    "rcy": 42,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 63.41609191894531,
    "h": 85.70999908447266
   },
   {
    "name": "soul-8",
    "file": "e79e8e71d8aed9d819d3eea06abb2503.svg",
    "ext": "svg",
    "rcx": 31,
    "rcy": 37,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 62.53190994262695,
    "h": 74
   },
   {
    "name": "soul-9",
    "file": "dea497d4520f99337a13e182f5efaed2.svg",
    "ext": "svg",
    "rcx": 27.99965487952366,
    "rcy": 35.999926096063746,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 57.32365036010742,
    "h": 72.85391998291016
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "index": 3
  },
  "x": 240,
  "y": 39,
  "size": 30,
  "maxSize": 30,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 88
 },
 {
  "name": "on fire indicator",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "45694635e991dc927d71201cd7df5bcf.svg",
    "ext": "svg",
    "rcx": 77,
    "rcy": 38,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 178,
    "h": 56
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 160,
  "y": 28,
  "size": 80,
  "maxSize": 80,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 66
 },
 {
  "name": "Soul dash buy",
  "isStage": false,
  "costumes": [
   {
    "name": "25",
    "file": "141d7eb5b9e14f13293dc93bed0be983.svg",
    "ext": "svg",
    "rcx": 78.75,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 157.78404235839844,
    "h": 98.13458251953125
   },
   {
    "name": "bougth",
    "file": "d8a1c7efe41864af40bc0c1e487037c5.svg",
    "ext": "svg",
    "rcx": 82.24491687782793,
    "rcy": 30.25,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 167.37818908691406,
    "h": 95.57711029052734
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "heal chance": 42
  },
  "x": -59,
  "y": 135,
  "size": 40,
  "maxSize": 50,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 37
 },
 {
  "name": "skins button",
  "isStage": false,
  "costumes": [
   {
    "name": "skins",
    "file": "c31c27385477c50eb3dcc06e590d4b94.svg",
    "ext": "svg",
    "rcx": 50,
    "rcy": 26.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 100,
    "h": 53
   },
   {
    "name": "sair",
    "file": "e5843f9ad8be879ae57270cd60c33e0d.svg",
    "ext": "svg",
    "rcx": 50,
    "rcy": 26.5,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 100,
    "h": 53
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {
   "skins open": "false"
  },
  "x": 1,
  "y": -149,
  "size": 85,
  "maxSize": 85,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 69
 },
 {
  "name": "selected skin",
  "isStage": false,
  "costumes": [
   {
    "name": "jack",
    "file": "876c684f64b7bc11c427a0af0b2b8d89.svg",
    "ext": "svg",
    "rcx": 46.22748000000007,
    "rcy": 69.04489,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 92.45496368408203,
    "h": 166.8305206298828
   },
   {
    "name": "old jack",
    "file": "1f8a3de708964b3bc0d4e719983abb92.svg",
    "ext": "svg",
    "rcx": 59.63263870605397,
    "rcy": 54.72914314949533,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 119.26528930664062,
    "h": 138.81715393066406
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": -112,
  "y": 19,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 68
 },
 {
  "name": "old jack select",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "03d0b19e5e1fe5ce12020127afa4e8b1.svg",
    "ext": "svg",
    "rcx": 40,
    "rcy": 41,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 80,
    "h": 82
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 178,
  "y": 31,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 70
 },
 {
  "name": "jack select",
  "isStage": false,
  "costumes": [
   {
    "name": "costume1",
    "file": "5fcd1faa7675a7c890828223864cfe0e.svg",
    "ext": "svg",
    "rcx": 40,
    "rcy": 41,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 80,
    "h": 82
   }
  ],
  "sounds": [
   {
    "name": "pop",
    "file": "83a9787d4cb6f3b7632b4ddfebf74367.wav",
    "rate": 48000,
    "samples": 1123
   }
  ],
  "vars": {},
  "x": 178,
  "y": 118,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 0,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 67
 },
 {
  "name": "skin change effect",
  "isStage": false,
  "costumes": [
   {
    "name": "1",
    "file": "8ea0f2e2eaae53908e8a9c89f1ce0576.svg",
    "ext": "svg",
    "rcx": 60.82325703225831,
    "rcy": -20.26403640245647,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 122.26078796386719,
    "h": 73.50775146484375
   },
   {
    "name": "2",
    "file": "87c3851cc4c9b1cbd8c9dbf3ba15329e.svg",
    "ext": "svg",
    "rcx": 112.0341386925775,
    "rcy": 49.08582761290319,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 209.10122680664062,
    "h": 130.39154052734375
   },
   {
    "name": "3",
    "file": "16c5b2c8f4f04c85763dadd023d90483.svg",
    "ext": "svg",
    "rcx": 117.37825377419341,
    "rcy": 84.1234147005133,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 261.9206237792969,
    "h": 123.26223754882812
   },
   {
    "name": "4",
    "file": "6227b3970037f0da24d34f0d8ec4e93d.svg",
    "ext": "svg",
    "rcx": 87.5389808387097,
    "rcy": 158.03498347590926,
    "res": 1,
    "vx": 0,
    "vy": 0,
    "w": 204.63841247558594,
    "h": 185.90057373046875
   }
  ],
  "sounds": [
   {
    "name": "Skin change",
    "file": "b610887493ce7fbf0aa5605f758eac83.wav",
    "rate": 48000,
    "samples": 29394
   }
  ],
  "vars": {},
  "x": -108,
  "y": 3,
  "size": 100,
  "maxSize": 100,
  "direction": 90,
  "visible": false,
  "currentCostume": 3,
  "rotationStyle": "all around",
  "volume": 100,
  "layerOrder": 75
 }
] as TargetDef[];

export const monitors: MonitorDef[] = [
 {
  "name": "Almas",
  "label": "Almas",
  "x": 3,
  "y": 39,
  "visible": false,
  "mode": "slider"
 },
 {
  "name": "walkspeed",
  "label": "walkspeed",
  "x": 7,
  "y": 68,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "health",
  "label": "health",
  "x": 190,
  "y": 47,
  "visible": false,
  "mode": "slider"
 },
 {
  "name": "mobile starter",
  "label": "mobile starter",
  "x": 5,
  "y": 32,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "shooting",
  "label": "shooting",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "dash distance",
  "label": "dash distance",
  "x": 304,
  "y": 132,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "health drop",
  "label": "zombie: health drop",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "shoot speed",
  "label": "shoot speed",
  "x": 175,
  "y": 0,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "shield chance 2",
  "label": "shield chance 2",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "bat direction",
  "label": "bat direction",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "derrubadas com o bastão",
  "label": "derrubadas com o bastão",
  "x": 9,
  "y": 258,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "derrubadas com o arco",
  "label": "derrubadas com o arco",
  "x": 260,
  "y": 258,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "derrubadas totais",
  "label": "derrubadas totais",
  "x": 158,
  "y": 227,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "direction to move",
  "label": "direction to move",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "shield chance 3",
  "label": "shield chance 3",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "shield chance",
  "label": "shield chance",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "z speed",
  "label": "z speed",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "player x",
  "label": "player: player x",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "player y",
  "label": "player y",
  "x": 5,
  "y": 58,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "store open",
  "label": "store open",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "hitbox",
  "label": "hitbox",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "total souls",
  "label": "total souls",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "kingofcuts",
  "label": "kingofcuts",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "fully maxed",
  "label": "sword hitbox: fully maxed",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "bow",
  "label": "achievements: bow",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "sword",
  "label": "achievements: sword",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "maxed",
  "label": "achievements: maxed",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "moving",
  "label": "player: moving",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "change mobile",
  "label": "mobile mode button: change mobile",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "boss speed",
  "label": "boss speed",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "boss dead",
  "label": "boss dead",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "bat equiped",
  "label": "bat equiped",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "mobile koc",
  "label": "koc hitbox: mobile koc",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "koc mobile active",
  "label": "koc mobile active",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "Big Hammer",
  "label": "Big Hammer",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "mobile mode",
  "label": "mobile mode",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "rich",
  "label": "achievements: rich",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "batonly",
  "label": "batonly",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "z armor hp",
  "label": "z armor hp",
  "x": 5,
  "y": 59,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "boss atack",
  "label": "boss atack",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "Brute health",
  "label": "Brute health",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "md bow",
  "label": "md bow",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "davidegoliath",
  "label": "achievements: davidegoliath",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "transfigured health",
  "label": "transfigured health",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "oneofus",
  "label": "achievements: oneofus",
  "x": 5,
  "y": 31,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "spawn location",
  "label": "zombie: spawn location",
  "x": 2,
  "y": 30,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "spawn location",
  "label": "zombie2: spawn location",
  "x": 5,
  "y": 57,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "spawn location",
  "label": "zombie3: spawn location",
  "x": 5,
  "y": 84,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "spawn location",
  "label": "boss brute: spawn location",
  "x": 5,
  "y": 29,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "spawn location",
  "label": "boss transfigured: spawn location",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "fire ring off",
  "label": "fire ring off",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "swordCombo",
  "label": "bat: swordCombo",
  "x": 5,
  "y": 29,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "complete achievment",
  "label": "achievment.1: complete achievment",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "achiev page",
  "label": "achiev page",
  "x": 391,
  "y": 55,
  "visible": false,
  "mode": "large"
 },
 {
  "name": "achievPageOpen",
  "label": "achievPageOpen",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "hipno health",
  "label": "hipno health",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "Laser On",
  "label": "Laser On",
  "x": 5,
  "y": 32,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "m shadow",
  "label": "achievements: m shadow",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "pauseOn",
  "label": "pause: pauseOn",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "cur-ava",
  "label": "cur-ava",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "heal chance",
  "label": "Curse Avatar buy: heal chance",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "index",
  "label": "souls number: index",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "in-game",
  "label": "in-game",
  "x": 1,
  "y": 38,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "tip change time",
  "label": "tip change time",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "bar width",
  "label": "p health: bar width",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "bar %",
  "label": "p health: bar %",
  "x": 5,
  "y": 32,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "hp max",
  "label": "p health: hp max",
  "x": 5,
  "y": 59,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "bleeding",
  "label": "bleeding",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "bleed time",
  "label": "bleed time",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "blood splatter chance",
  "label": "bleed particles: blood splatter chance",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "on fire",
  "label": "on fire",
  "x": 7,
  "y": 30,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "fire time",
  "label": "fire time",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "Soul Dash",
  "label": "Soul Dash",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "taking damage",
  "label": "player: taking damage",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "dashing",
  "label": "dashing",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "dash energy",
  "label": "dash energy",
  "x": 6,
  "y": 32,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "last walkspeed",
  "label": "player: last walkspeed",
  "x": 6,
  "y": 92,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "asnwer",
  "label": "codes button: asnwer",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "clicks",
  "label": "cooldown dash mobile blocker: clicks",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "first knight kill",
  "label": "achievements: first knight kill",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "skiped",
  "label": "death message: skiped",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "IM CLONE!",
  "label": "bow: IM CLONE!",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "skins open",
  "label": "skins button: skins open",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "selected skin",
  "label": "selected skin",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "timer",
  "label": "mouse click: timer",
  "x": 5,
  "y": 32,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "NoCooldown",
  "label": "NoCooldown",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "All powers",
  "label": "achievements: All powers",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "hipno direction",
  "label": "hipno direction",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 },
 {
  "name": "sword htbx Size",
  "label": "sword htbx Size",
  "x": 5,
  "y": 5,
  "visible": false,
  "mode": "default"
 }
];
