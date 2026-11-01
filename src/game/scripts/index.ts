// GERADO por tools/transpile.mjs
import type { ScriptDef } from '../../engine/api';
import { scripts as s0 } from './00_stage';
import { scripts as s1 } from './01_player';
import { scripts as s2 } from './02_play_button';
import { scripts as s3 } from './03_codes_button';
import { scripts as s4 } from './04_back_to_the_loby';
import { scripts as s5 } from './05_bat';
import { scripts as s6 } from './06_zombie3';
import { scripts as s7 } from './07_zombie2';
import { scripts as s8 } from './08_zombie';
import { scripts as s9 } from './09_mouse_click';
import { scripts as s10 } from './10_store';
import { scripts as s11 } from './11_bat_hitbox';
import { scripts as s12 } from './12_store_menu';
import { scripts as s13 } from './13_walkspeed_upgrade';
import { scripts as s14 } from './14_info_texts';
import { scripts as s15 } from './15_p_health';
import { scripts as s16 } from './16_bat_length_upgrade';
import { scripts as s17 } from './17_attack_button';
import { scripts as s18 } from './18_bow';
import { scripts as s19 } from './19_choose_bow';
import { scripts as s20 } from './20_choose_bat';
import { scripts as s21 } from './21_dash_distance_upgrade';
import { scripts as s22 } from './22_alma';
import { scripts as s23 } from './23_bow_shot_rate_upg';
import { scripts as s24 } from './24_death_message';
import { scripts as s25 } from './25_allc_buy';
import { scripts as s26 } from './26_shield';
import { scripts as s27 } from './27_shield2';
import { scripts as s28 } from './28_shield3';
import { scripts as s29 } from './29_dash_button';
import { scripts as s30 } from './30_cooldown_dash_mobile_blocker';
import { scripts as s31 } from './31_joystick';
import { scripts as s32 } from './32_base';
import { scripts as s33 } from './33_pointer';
import { scripts as s34 } from './34_dash_cooldown_timer';
import { scripts as s35 } from './35_pause';
import { scripts as s36 } from './36_screen_color';
import { scripts as s37 } from './37_hitbox_off';
import { scripts as s38 } from './38_hitbox_on';
import { scripts as s39 } from './39_zombie_knight';
import { scripts as s40 } from './40_z_knight_health';
import { scripts as s41 } from './41_koc_hitbox';
import { scripts as s42 } from './42_achievements';
import { scripts as s43 } from './43_boss_brute';
import { scripts as s44 } from './44_talkbox';
import { scripts as s45 } from './45_talkbox_animation';
import { scripts as s46 } from './46_z_death_explosion';
import { scripts as s47 } from './47_z_death_explosion2';
import { scripts as s48 } from './48_z_death_explosion3';
import { scripts as s49 } from './49_z_armor_death_explosion';
import { scripts as s50 } from './50_boss_death_explosion';
import { scripts as s51 } from './51_mobile_mode';
import { scripts as s52 } from './52_pc_mode';
import { scripts as s53 } from './53_boss_warning';
import { scripts as s54 } from './54_modern_bow_buy';
import { scripts as s55 } from './55_laser';
import { scripts as s56 } from './56_boss_trans';
import { scripts as s57 } from './57_fire';
import { scripts as s58 } from './58_fire_ring';
import { scripts as s59 } from './59_comandos';
import { scripts as s60 } from './60_achievments_button';
import { scripts as s61 } from './61_achievment_1';
import { scripts as s62 } from './62_achievment_2';
import { scripts as s63 } from './63_achievment_3';
import { scripts as s64 } from './64_achievment_4';
import { scripts as s65 } from './65_achievment_5';
import { scripts as s66 } from './66_achievment_6';
import { scripts as s67 } from './67_page_changer_up';
import { scripts as s68 } from './68_page_changer_up2';
import { scripts as s69 } from './69_achievment_7';
import { scripts as s70 } from './70_boss_hipnotiser';
import { scripts as s71 } from './71_hipno_laser';
import { scripts as s72 } from './72_achievment_8';
import { scripts as s73 } from './73_achievment_9';
import { scripts as s74 } from './74_achievment_10';
import { scripts as s75 } from './75_curse_avatar_buy';
import { scripts as s76 } from './76_designs';
import { scripts as s77 } from './77_souls_number';
import { scripts as s78 } from './78_souls_sign';
import { scripts as s79 } from './79_bow_kills_sign';
import { scripts as s80 } from './80_bow_kills_number';
import { scripts as s81 } from './81_boss_apear';
import { scripts as s82 } from './82_bat_kills_sign';
import { scripts as s83 } from './83_bat_kills_number';
import { scripts as s84 } from './84_tips';
import { scripts as s85 } from './85_bleeding_indicator';
import { scripts as s86 } from './86_bleed_sec_number';
import { scripts as s87 } from './87_bleed_particles';
import { scripts as s88 } from './88_brute_healthbar';
import { scripts as s89 } from './89_transfig_healthbar';
import { scripts as s90 } from './90_hipno_healthbar';
import { scripts as s91 } from './91_on_fire_effect';
import { scripts as s92 } from './92_on_fire_sec_number';
import { scripts as s93 } from './93_on_fire_indicator';
import { scripts as s94 } from './94_soul_dash_buy';
import { scripts as s95 } from './95_skins_button';
import { scripts as s96 } from './96_selected_skin';
import { scripts as s97 } from './97_old_jack_select';
import { scripts as s98 } from './98_jack_select';
import { scripts as s99 } from './99_skin_change_effect';

export const allScripts: Record<string, ScriptDef[]> = {
  "Stage": s0,
  "player": s1,
  "play button": s2,
  "codes button": s3,
  "back to the loby": s4,
  "bat": s5,
  "zombie3": s6,
  "zombie2": s7,
  "zombie": s8,
  "mouse click": s9,
  "store": s10,
  "bat hitbox": s11,
  "store menu": s12,
  "walkspeed upgrade": s13,
  "info texts": s14,
  "p health": s15,
  "bat length upgrade": s16,
  "Attack button": s17,
  "bow": s18,
  "choose bow": s19,
  "choose bat": s20,
  "dash distance upgrade": s21,
  "+alma": s22,
  "bow shot rate upg": s23,
  "death message": s24,
  "Allc buy": s25,
  "shield": s26,
  "shield2": s27,
  "shield3": s28,
  "dash button": s29,
  "cooldown dash mobile blocker": s30,
  "Joystick": s31,
  "base": s32,
  "pointer": s33,
  "dash cooldown timer": s34,
  "pause": s35,
  "screen color": s36,
  "hitbox off": s37,
  "hitbox on": s38,
  "zombie knight": s39,
  "z knight health": s40,
  "koc hitbox": s41,
  "achievements": s42,
  "boss brute": s43,
  "talkbox": s44,
  "talkbox animation": s45,
  "z death explosion": s46,
  "z death explosion2": s47,
  "z death explosion3": s48,
  "z armor death explosion": s49,
  "boss death explosion": s50,
  "mobile mode": s51,
  "pc mode": s52,
  "boss warning": s53,
  "modern bow buy": s54,
  "laser": s55,
  "boss trans": s56,
  "fire": s57,
  "fire ring": s58,
  "comandos": s59,
  "achievments button": s60,
  "achievment.1": s61,
  "achievment.2": s62,
  "achievment.3": s63,
  "achievment.4": s64,
  "achievment.5": s65,
  "achievment.6": s66,
  "page changer up": s67,
  "page changer up2": s68,
  "achievment.7": s69,
  "boss hipnotiser": s70,
  "hipno laser": s71,
  "achievment.8": s72,
  "achievment.9": s73,
  "achievment.10": s74,
  "Curse Avatar buy": s75,
  "designs": s76,
  "souls number": s77,
  "souls sign": s78,
  "bow kills sign": s79,
  "bow kills number": s80,
  "boss apear ": s81,
  "bat kills sign": s82,
  "bat kills number": s83,
  "tips": s84,
  "bleeding indicator": s85,
  "bleed sec number": s86,
  "bleed particles": s87,
  "brute healthbar": s88,
  "transfig healthbar": s89,
  "hipno healthbar": s90,
  "on fire effect": s91,
  "on fire sec number": s92,
  "on fire indicator": s93,
  "Soul dash buy": s94,
  "skins button": s95,
  "selected skin": s96,
  "old jack select": s97,
  "jack select": s98,
  "skin change effect": s99,
};
