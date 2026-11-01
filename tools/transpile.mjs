// Transpilador Scratch -> TypeScript.
//
// Lê original/project.json (extraído do .sb3) e gera:
//   src/game/project.generated.ts      -> sprites, fantasias, sons, variáveis e estado inicial
//   src/game/scripts/<sprite>.ts       -> um arquivo por sprite, com os scripts convertidos em geradores
//   src/game/scripts/index.ts          -> registro de todos os scripts
//
// Cada bloco do Scratch vira uma linha de TypeScript legível. Laços e esperas usam `yield`,
// exatamente como o agendador de threads do Scratch (uma iteração por quadro).
//
// Uso: npm run transpile
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const project = JSON.parse(fs.readFileSync(path.join(root, 'original', 'project.json'), 'utf8'));
const metrics = JSON.parse(fs.readFileSync(path.join(root, 'src', 'game', 'costume-metrics.json'), 'utf8')).metrics;
const config = JSON.parse(fs.readFileSync(path.join(root, 'src', 'game', 'transpile-config.json'), 'utf8'));
const outDir = path.join(root, 'src', 'game', 'scripts');
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const stage = project.targets.find((t) => t.isStage);
const J = (v) => JSON.stringify(v);
const slug = (s) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
    .toLowerCase() || 'sprite';

const MENU_OPCODES = new Set([
  'motion_goto_menu',
  'motion_pointtowards_menu',
  'motion_glideto_menu',
  'sound_sounds_menu',
  'looks_costume',
  'looks_backdrops',
  'control_create_clone_of_menu',
  'sensing_keyoptions',
  'sensing_touchingobjectmenu',
]);

const KEY_NAMES = { ' ': 'space' };

class Gen {
  constructor(target, index) {
    this.t = target;
    this.index = index;
    this.blocks = target.blocks;
    this.procs = new Map(); // proccode -> { fn, warp, id }
    this.warp = false;
    this.screenGoto = config.screenRelativeGoto.includes(target.name);
  }

  // ---------------------------------------------------------------- variáveis
  varRef(name, id) {
    const local = Object.entries(this.t.variables).find(([vid, v]) => vid === id || v[0] === name);
    if (!this.t.isStage && local) return `t.v[${J(local[1][0])}]`;
    return `G[${J(name)}]`;
  }

  // ------------------------------------------------------------------- entradas
  // retorna { c: código, ty: 'bool' | 'num' | 'str' | 'any' }
  input(b, name) {
    const inp = b.inputs?.[name];
    if (!inp) return { c: '""', ty: 'str' };
    const v = inp[1];
    if (Array.isArray(v)) {
      const [type, val] = v;
      if (type === 12) return { c: this.varRef(val, v[2]), ty: 'any' };
      if (type === 13) throw new Error('listas não suportadas');
      if (type === 11) return { c: J(val), ty: 'str' };
      if (type >= 4 && type <= 8) {
        // campo numérico: o Scratch guarda como texto; preservamos o valor original
        return { c: J(val), ty: 'str', lit: val };
      }
      return { c: J(val), ty: 'str', lit: val };
    }
    if (typeof v === 'string') return this.reporter(v);
    return { c: '""', ty: 'str' };
  }
  numArg(b, name) {
    const i = this.input(b, name);
    if (i.lit !== undefined) {
      const n = Number(i.lit);
      return Number.isNaN(n) || String(i.lit).trim() === '' ? '0' : String(n);
    }
    return i.ty === 'num' ? i.c : `num(${i.c})`;
  }
  boolArg(b, name) {
    const i = this.input(b, name);
    if (i.ty === 'bool') return i.c;
    if (i.lit !== undefined) return String(!(i.lit === '' || i.lit === '0' || String(i.lit).toLowerCase() === 'false'));
    return `bool(${i.c})`;
  }
  /** valor de um menu (shadow block com campo) ou, se houver um reporter encaixado, a expressão */
  menu(b, name) {
    const inp = b.inputs?.[name];
    if (!inp) return J('');
    const v = inp[1];
    if (typeof v === 'string') {
      const mb = this.blocks[v];
      if (mb && MENU_OPCODES.has(mb.opcode)) return J(Object.values(mb.fields)[0][0]);
      return this.reporter(v).c;
    }
    if (Array.isArray(v)) return this.input(b, name).c;
    return J('');
  }

  reporter(id) {
    const b = this.blocks[id];
    if (!b) throw new Error('bloco inexistente ' + id);
    const f = (n) => b.fields?.[n]?.[0];
    const A = (n) => this.input(b, n).c;
    const N = (n) => this.numArg(b, n);
    switch (b.opcode) {
      case 'operator_equals': return { c: `eq(${A('OPERAND1')}, ${A('OPERAND2')})`, ty: 'bool' };
      case 'operator_gt': return { c: `gt(${A('OPERAND1')}, ${A('OPERAND2')})`, ty: 'bool' };
      case 'operator_lt': return { c: `lt(${A('OPERAND1')}, ${A('OPERAND2')})`, ty: 'bool' };
      case 'operator_and': return { c: `(${this.boolArg(b, 'OPERAND1')} && ${this.boolArg(b, 'OPERAND2')})`, ty: 'bool' };
      case 'operator_or': return { c: `(${this.boolArg(b, 'OPERAND1')} || ${this.boolArg(b, 'OPERAND2')})`, ty: 'bool' };
      case 'operator_not': return { c: `!${this.boolArg(b, 'OPERAND')}`, ty: 'bool' };
      case 'operator_random': return { c: `rand(${A('FROM')}, ${A('TO')})`, ty: 'num' };
      case 'operator_add': return { c: `(${N('NUM1')} + ${N('NUM2')})`, ty: 'num' };
      case 'operator_subtract': return { c: `(${N('NUM1')} - ${N('NUM2')})`, ty: 'num' };
      case 'operator_multiply': return { c: `(${N('NUM1')} * ${N('NUM2')})`, ty: 'num' };
      case 'operator_divide': return { c: `(${N('NUM1')} / ${N('NUM2')})`, ty: 'num' };
      case 'operator_join': return { c: `join(${A('STRING1')}, ${A('STRING2')})`, ty: 'str' };
      case 'operator_letter_of': return { c: `letterOf(${A('LETTER')}, ${A('STRING')})`, ty: 'str' };
      case 'looks_size': return { c: 't.sizeRounded', ty: 'num' };
      case 'looks_costumenumbername': return { c: `t.costumeNumberName(${J(f('NUMBER_NAME'))})`, ty: 'any' };
      case 'motion_direction': return { c: 't.direction', ty: 'num' };
      case 'motion_xposition': return { c: 't.xPos', ty: 'num' };
      case 'motion_yposition': return { c: 't.yPos', ty: 'num' };
      case 'sensing_touchingobject': return { c: `t.touching(${this.menu(b, 'TOUCHINGOBJECTMENU')}, th)`, ty: 'bool' };
      case 'sensing_keypressed': return { c: `rt.keyDown(${this.keyName(this.menu(b, 'KEY_OPTION'))})`, ty: 'bool' };
      case 'sensing_mousedown': return { c: 'rt.mouseDown(th)', ty: 'bool' };
      case 'sensing_answer': return { c: 'rt.answer', ty: 'str' };
      case 'sensing_timer': return { c: 'rt.timer', ty: 'num' };
      case 'data_variable': return { c: this.varRef(f('VARIABLE'), b.fields.VARIABLE[1]), ty: 'any' };
      default:
        if (MENU_OPCODES.has(b.opcode)) return { c: J(Object.values(b.fields)[0][0]), ty: 'str' };
        throw new Error(`Reporter não suportado: ${b.opcode} (sprite ${this.t.name})`);
    }
  }
  keyName(code) {
    return code; // nomes de tecla do Scratch já são minúsculos ("a", "up arrow", "space")
  }

  // -------------------------------------------------------------------- blocos
  stack(id, ind) {
    let out = '';
    while (id) {
      const b = this.blocks[id];
      out += this.stmt(b, ind);
      id = b.next;
    }
    return out;
  }
  sub(b, name, ind) {
    const v = b.inputs?.[name];
    if (!v || typeof v[1] !== 'string') return '';
    return this.stack(v[1], ind + '  ');
  }
  loopYield(ind) {
    return this.warp ? '' : `${ind}  yield LOOP;\n`;
  }

  stmt(b, ind) {
    const f = (n) => b.fields?.[n]?.[0];
    const A = (n) => this.input(b, n).c;
    const N = (n) => this.numArg(b, n);
    const P = ind;
    switch (b.opcode) {
      // --- controle
      case 'control_if':
        return `${P}if (${this.boolArg(b, 'CONDITION')}) {\n${this.sub(b, 'SUBSTACK', ind)}${P}}\n`;
      case 'control_if_else':
        return `${P}if (${this.boolArg(b, 'CONDITION')}) {\n${this.sub(b, 'SUBSTACK', ind)}${P}} else {\n${this.sub(b, 'SUBSTACK2', ind)}${P}}\n`;
      case 'control_forever':
        return `${P}for (;;) {\n${this.sub(b, 'SUBSTACK', ind)}${this.loopYield(ind)}${P}}\n`;
      case 'control_repeat':
        return `${P}for (let n = Math.round(${N('TIMES')}); n > 0; n--) {\n${this.sub(b, 'SUBSTACK', ind)}${this.loopYield(ind)}${P}}\n`;
      case 'control_repeat_until':
        return `${P}while (!${this.boolArg(b, 'CONDITION')}) {\n${this.sub(b, 'SUBSTACK', ind)}${this.loopYield(ind)}${P}}\n`;
      case 'control_wait':
        return `${P}yield* rt.wait(${A('DURATION')});\n`;
      case 'control_wait_until':
        return `${P}while (!${this.boolArg(b, 'CONDITION')}) yield WAIT;\n`;
      case 'control_stop': {
        const o = f('STOP_OPTION');
        if (o === 'this script') return `${P}return;\n`;
        if (o === 'all') return `${P}rt.stopAll();\n${P}return;\n`;
        return `${P}rt.stopOtherScripts(t, th);\n`;
      }
      case 'control_create_clone_of': {
        const m = this.menu(b, 'CLONE_OPTION');
        return m === J('_myself_') ? `${P}rt.createClone(t);\n` : `${P}rt.createClone(rt.sprite(${m}));\n`;
      }
      case 'control_delete_this_clone':
        return `${P}if (rt.deleteThisClone(t)) return;\n`;
      // --- eventos
      case 'event_broadcast':
        return `${P}rt.broadcast(${A('BROADCAST_INPUT')}, th);\n`;
      // --- dados
      case 'data_setvariableto':
        return `${P}${this.varRef(f('VARIABLE'), b.fields.VARIABLE[1])} = ${A('VALUE')};\n`;
      case 'data_changevariableby': {
        const r = this.varRef(f('VARIABLE'), b.fields.VARIABLE[1]);
        return `${P}${r} = num(${r}) + ${N('VALUE')};\n`;
      }
      case 'data_showvariable': return `${P}rt.setMonitorVisible(${J(f('VARIABLE'))}, true);\n`;
      case 'data_hidevariable': return `${P}rt.setMonitorVisible(${J(f('VARIABLE'))}, false);\n`;
      // --- movimento
      case 'motion_movesteps': return `${P}t.move(${N('STEPS')});\n`;
      case 'motion_gotoxy':
        return `${P}t.${this.screenGoto ? 'goToScreen' : 'setXY'}(${N('X')}, ${N('Y')});\n`;
      case 'motion_goto': return `${P}t.goTo(${this.menu(b, 'TO')}, th);\n`;
      case 'motion_glidesecstoxy': return `${P}yield* t.glide(${A('SECS')}, ${N('X')}, ${N('Y')});\n`;
      case 'motion_glideto': return `${P}yield* t.glideTo(${A('SECS')}, ${this.menu(b, 'TO')}, th);\n`;
      case 'motion_pointtowards': return `${P}t.pointTowards(${this.menu(b, 'TOWARDS')}, th);\n`;
      case 'motion_pointindirection': return `${P}t.setDirection(${N('DIRECTION')});\n`;
      case 'motion_turnleft': return `${P}t.setDirection(t.direction - ${N('DEGREES')});\n`;
      case 'motion_turnright': return `${P}t.setDirection(t.direction + ${N('DEGREES')});\n`;
      case 'motion_changexby': return `${P}t.changeX(${N('DX')});\n`;
      case 'motion_changeyby': return `${P}t.changeY(${N('DY')});\n`;
      case 'motion_setx': return `${P}t.setX(${N('X')});\n`;
      case 'motion_sety': return `${P}t.setY(${N('Y')});\n`;
      case 'motion_ifonedgebounce': return `${P}t.ifOnEdgeBounce();\n`;
      case 'motion_setrotationstyle': return `${P}t.setRotationStyle(${J(f('STYLE'))});\n`;
      // --- aparência
      case 'looks_show': return `${P}t.show();\n`;
      case 'looks_hide': return `${P}t.hide();\n`;
      case 'looks_switchcostumeto': return `${P}t.setCostume(${this.menu(b, 'COSTUME')});\n`;
      case 'looks_nextcostume': return `${P}t.nextCostume();\n`;
      case 'looks_switchbackdropto': return `${P}rt.stage.setCostume(${this.menu(b, 'BACKDROP')});\n`;
      case 'looks_changesizeby': return `${P}t.setSize(t.size + ${N('CHANGE')});\n`;
      case 'looks_setsizeto': return `${P}t.setSize(${N('SIZE')});\n`;
      case 'looks_seteffectto': return `${P}t.setEffect(${J(f('EFFECT'))}, ${N('VALUE')});\n`;
      case 'looks_changeeffectby': return `${P}t.changeEffect(${J(f('EFFECT'))}, ${N('CHANGE')});\n`;
      case 'looks_cleargraphiceffects': return `${P}t.clearEffects();\n`;
      case 'looks_gotofrontback': return `${P}rt.goToLayer(t, ${J(f('FRONT_BACK'))});\n`;
      case 'looks_goforwardbackwardlayers': return `${P}rt.goLayers(t, ${N('NUM')}, ${J(f('FORWARD_BACKWARD'))});\n`;
      case 'looks_say': return `${P}t.say(${A('MESSAGE')});\n`;
      case 'looks_sayforsecs': return `${P}yield* t.sayFor(${A('MESSAGE')}, ${A('SECS')});\n`;
      // --- som
      case 'sound_play': return `${P}t.playSound(${this.menu(b, 'SOUND_MENU')});\n`;
      case 'sound_playuntildone': return `${P}yield* t.playSoundUntilDone(${this.menu(b, 'SOUND_MENU')});\n`;
      case 'sound_stopallsounds': return `${P}rt.audio.stopAll();\n`;
      case 'sound_setvolumeto': return `${P}t.setVolume(${N('VOLUME')});\n`;
      case 'sound_changevolumeby': return `${P}t.setVolume(t.volume + ${N('VOLUME')});\n`;
      // --- sensores
      case 'sensing_resettimer': return `${P}rt.resetTimer();\n`;
      case 'sensing_askandwait': return `${P}yield* rt.ask(${A('QUESTION')});\n`;
      // --- procedimentos
      case 'procedures_call': {
        const p = this.procs.get(b.mutation.proccode);
        if (!p) throw new Error('procedimento não encontrado: ' + b.mutation.proccode);
        if (Object.keys(b.inputs || {}).length) throw new Error('procedimentos com argumentos não suportados');
        return `${P}yield* ${p.fn}(t, th);\n`;
      }
      default:
        throw new Error(`Bloco não suportado: ${b.opcode} (sprite ${this.t.name})`);
    }
  }

  // ------------------------------------------------------------------ cabeçalhos
  hat(id) {
    const b = this.blocks[id];
    const f = (n) => b.fields?.[n]?.[0];
    switch (b.opcode) {
      case 'event_whenflagclicked': return '{ k: "flag" }';
      case 'event_whenbroadcastreceived': return `{ k: "broadcast", name: ${J(f('BROADCAST_OPTION'))} }`;
      case 'event_whenkeypressed': return `{ k: "key", key: ${J(f('KEY_OPTION'))} }`;
      case 'event_whenthisspriteclicked': return '{ k: "click" }';
      case 'control_start_as_clone': return '{ k: "clone" }';
      case 'event_whengreaterthan': {
        if (f('WHENGREATERTHANMENU') !== 'TIMER') throw new Error('só "timer" é suportado em "quando X >"');
        return `{ k: "greater", test: () => rt.timer > ${this.numArg(b, 'VALUE')} }`;
      }
      default: return null;
    }
  }

  generate() {
    const top = Object.entries(this.blocks).filter(([, b]) => !Array.isArray(b) && b.topLevel);
    // procedimentos
    let pi = 0;
    let procSrc = '';
    for (const [id, b] of top) {
      if (b.opcode !== 'procedures_definition') continue;
      const proto = this.blocks[b.inputs.custom_block[1]];
      const code = proto.mutation.proccode;
      if (JSON.parse(proto.mutation.argumentids || '[]').length) throw new Error('procedimentos com argumentos não suportados');
      this.procs.set(code, { fn: `proc${pi++}`, warp: proto.mutation.warp === 'true', id });
    }
    for (const [, b] of top) {
      if (b.opcode !== 'procedures_definition') continue;
      const proto = this.blocks[b.inputs.custom_block[1]];
      const p = this.procs.get(proto.mutation.proccode);
      this.warp = p.warp;
      procSrc += `// definir ${proto.mutation.proccode}${p.warp ? ' (sem atualizar a tela)' : ''}\nfunction* ${p.fn}(t: Target, th: Thread): Generator<number, void, void> {\n${this.stack(b.next, '  ')}}\n\n`;
      this.warp = false;
    }
    let scripts = '';
    for (const [id, b] of top) {
      if (b.opcode === 'procedures_definition') continue;
      const h = this.hat(id);
      if (!h) continue; // blocos soltos sem chapéu não executam
      scripts += `  {\n    hat: ${h},\n    fn: function* (t, th) {\n${this.stack(b.next, '      ')}    },\n  },\n`;
    }
    const header = `// GERADO por tools/transpile.mjs a partir de "${this.t.name}" — não edite à mão.\n// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.\n/* eslint-disable */\nimport { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';\n\n`;
    return `${header}${procSrc}export const scripts: ScriptDef[] = [\n${scripts}];\n`;
  }
}

// ------------------------------------------------------------------ metadados
const defs = [];
const files = [];
let n = 0;
for (const t of project.targets) {
  const g = new Gen(t, n);
  const src = g.generate();
  const file = `${String(n).padStart(2, '0')}_${t.isStage ? 'stage' : slug(t.name)}`;
  fs.writeFileSync(path.join(outDir, `${file}.ts`), src);
  files.push({ file, name: t.name });

  let maxSize = t.size ?? 100;
  for (const b of Object.values(t.blocks)) {
    if (!Array.isArray(b) && b.opcode === 'looks_setsizeto') {
      const v = b.inputs.SIZE?.[1];
      if (Array.isArray(v)) maxSize = Math.max(maxSize, Number(v[1]) || 0);
    }
  }
  defs.push({
    name: t.name,
    isStage: t.isStage,
    costumes: t.costumes.map((c) => {
      const m = metrics[c.md5ext] ?? { x: 0, y: 0, w: 0, h: 0 };
      return {
        name: c.name,
        file: c.md5ext,
        ext: c.dataFormat,
        rcx: c.rotationCenterX,
        rcy: c.rotationCenterY,
        res: c.dataFormat === 'svg' ? 1 : c.bitmapResolution || 1,
        vx: m.x,
        vy: m.y,
        w: m.w,
        h: m.h,
      };
    }),
    sounds: t.sounds.map((s) => ({ name: s.name, file: s.md5ext, rate: s.rate, samples: s.sampleCount })),
    vars: Object.fromEntries(Object.values(t.variables).map(([name, value]) => [name, value])),
    x: t.x ?? 0,
    y: t.y ?? 0,
    size: t.size ?? 100,
    maxSize,
    direction: t.direction ?? 90,
    visible: t.visible ?? true,
    currentCostume: t.currentCostume,
    rotationStyle: t.rotationStyle ?? 'all around',
    volume: t.volume ?? 100,
    layerOrder: t.layerOrder ?? 0,
  });
  n++;
}

const monitors = project.monitors
  .filter((m) => m.opcode === 'data_variable')
  .map((m) => ({
    name: m.params.VARIABLE,
    label: m.spriteName ? `${m.spriteName}: ${m.params.VARIABLE}` : m.params.VARIABLE,
    x: m.x,
    y: m.y,
    visible: m.visible,
    mode: m.mode,
  }));

fs.writeFileSync(
  path.join(root, 'src', 'game', 'project.generated.ts'),
  `// GERADO por tools/transpile.mjs — dados do projeto Scratch original.\nimport type { TargetDef } from '../engine/types';\nimport type { MonitorDef } from '../engine/runtime';\n\nexport const targets: TargetDef[] = ${JSON.stringify(defs, null, 1)} as TargetDef[];\n\nexport const monitors: MonitorDef[] = ${JSON.stringify(monitors, null, 1)};\n`,
);
fs.writeFileSync(
  path.join(outDir, 'index.ts'),
  `// GERADO por tools/transpile.mjs\nimport type { ScriptDef } from '../../engine/api';\n${files.map((f, i) => `import { scripts as s${i} } from './${f.file}';`).join('\n')}\n\nexport const allScripts: Record<string, ScriptDef[]> = {\n${files.map((f, i) => `  ${J(f.name)}: s${i},`).join('\n')}\n};\n`,
);
console.log(`OK: ${files.length} alvos transpilados.`);
