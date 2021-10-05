import { error } from '../../base/logger'

const SCRIPTED_ANIMS = [
  'One-Hand Handjob',
  'Standing One-Hand Handjob',
  'Seated One-Hand Handjob',
  'Two-Hand Handjob',
  'Standing Handjob & Ballrub',
  'Standing Onahole Handjob',
  'Tip & Shaft Licking',
  'Seated Tip & Shaft Licking',
  'One-Hand Blowjob',
  'Standing One-Hand Blowjob',
  'Two-Hand Blowjob',
  'Seated Two-Hand Blowjob',
  'Standing Two-Hand Blowjob',
  'Glans Rubbing',
  'Standing Glans Rubbing',
  'Seated Glans Rubbing',
  'Crowded Handjob',
  'Seated No-Hand Tip Licking',
  'Standing Handjob & Ball Licking',
  'Sitting Blowjob',
  'Bench Blowjob',
  'Standing No-Hand Blowjob',
  'Paizuri',
  'Standing Paizuri',
  'Seated Paizuri',
  'Pool Paizuri',
  'Seated Paizuri & Licking',
  'Hand-Assisted Paizuri',
  'Stated Hand-Assisted Paizuri',
  'Standing Hand-Assisted Paizuri',
  'Seated Hand-Assisted Paizuri',
  'Pressed Paizuri',
  'Paizuri & Sucking',
  'Seated Paizuri & Sucking',
  'Standing Paizuri & Sucking',

  'Missionary',
  'Holding Legs Missionary',
  'Piledriver Missionary',
  'Cowgirl',
  'Sofa Cowgirl',
  'Seated Facing',
  'Leg Lifted Facing Against Wall',
  'Doggystyle',
  'Arm-Grab Doggystyle',
  'Arm-Grab Doggystyle Against Seat',
  'Doggystyle Against Chair',
  'Doggystyle Against Desk',
  'Arm-Grab Doggystyle Against Desk',
  'Doggystyle Against Wall',
  'Leg Lifted Doggystyle Against Wall',
  'Doggystyle In Pool',
  'Doggystyle Against Fence',
  'Vaulting Horse Doggystyle',
  'Lying Doggystyle',
  'Spooning',
  'Seated Spooning',
  'Spooning on Desk',
  'Standing',
  'Ekiben',
  'Ekiben Grabbing Fence',
  'Laying On Desk',
  'Mating Press',
  'Pressed From Behind',

  // Onanie
  'Masturbating While Standing',
  'Standing masturbation',
  '立ちオナニ',
  'Masturbating In Chair',
  'Chair masturbation',
  '椅子オナニー',
  'Masturbating Against Corner',
  'Corner masturbation',
  '角オナニー',

  // Yuri
  'Tribbing',
  '具合わせ',
  'Mutual Groping',
  '互い弄り',
  'Chair Cunnilingus',
  '椅子クンニ',

  // FFM
  'Wフェラ',
  'Fellatio',
  'Wフェラ入れ替え',
  'Fellatio Switch',
  '後背位手マン',
  '3P Doggystyle',
  '後背位手マン入れ替え',
  '3P Doggystyle Switch',
  '騎乗位クンニ',
  '3P Cowgirl',
  '騎乗位クンニ入れ替え',
  '3P Cowgirl Switch',

  // Darkness
  'Chest Massaged Handjob',
  '胸揉まれ手コキ',
  'Irrumatio',
  'イラマチオ',
  'Fellatio & Handjob',
  'フェラ＆手コキ',
  'Pinned Missionary',
  '押さえ正常位',
  'Pinned Spooning',
  '押さえ側位',
  'Doggy & Fellatio',
  'バック＆フェラ',

  '亀頭いじり',
  '片手コキ',
  '両手コキ',
  '椅子亀頭いじり',
  '椅子片手コキ',
  '立ち亀頭いじり',
  '立ち片手コキ',
  '立ち手コキ玉いじり',
  '立ちオナホ手コキ',
  '密着手コキ',
  '先舐め＋竿舐め',
  '片手フェラ',
  '両手フェラ',
  '椅子先舐め＋竿舐め',
  '椅子ノーハンド先舐め',
  '椅子両手フェラ',
  '立ち玉舐め手コキ',
  '立ち片手フェラ',
  '立ち両手フェラ',
  '立ちノーハンドフェラ',
  '椅子またがりフェラ',
  'ベンチフェラ',
  'パイズリ',
  '腕はさみパイズリ',
  '押し付けパイズリ',
  'パイズリ+咥え',
  '椅子パイズリ',
  '椅子腕はさみパイズリ',
  '椅子パイズリ+舐め',
  '椅子パイズリ+咥え',
  '立ちパイズリ',
  '立ち腕はさみパイズリ',
  '立ちパイズリ+咥え',
  'プールパイズリ',

  '正常位',
  '開脚正常位',
  '後背位',
  '腕引っ張り後背位',
  '騎乗位',
  '側位',
  '立位',
  '駅弁',
  '椅子対面',
  '椅子背面',
  '椅子バック',
  '腕引っ張り椅子バック',
  '机寝位',
  '机バック',
  '腕引っ張り机バック',
  '机側位',
  '壁対面片足上げ',
  '壁バック',
  '片足上げ壁バック',
  'プールバック',
  'フェンス後背位',
  'フェンス掴まり駅弁',
  '種付けプレス',
  'マングリ正常位',
  '跳び箱バック',
  '寝バック',
  'ソファ騎乗位',
  '押し付けバック'
] as const

const AUTO_ANIMS = [
  // Caress
  'Caress (floor)',
  '仰向け愛撫',
  'Caress (stand)',
  '立ち愛撫',
  'Caress (wall)',
  '壁バック愛撫',
  'Caress (desk)',
  '机バック愛撫',
  'Caress (chair)',
  '椅子バック愛撫',
  'Caress (sitting)',
  '椅子座り愛撫',
  'Caress (all fours)',
  '四つん這い愛撫',
  'Desk Sitting',
  'Desk Squatting',
  'Bookshelf Caress',
  'Mischievous Caress'
] as const
export type SupportedAnimations = typeof SCRIPTED_ANIMS[number] | typeof AUTO_ANIMS[number]

const SUPPORTED_STATES = [
  // General
  'Idle',
  'A_Idle',
  'WLoop',
  'SLoop',
  'OLoop',
  'A_WLoop',
  'A_SLoop',
  'A_OLoop',
  'M_OUT_Start',
  'M_OUT_Loop',
  'A_M_OUT_Start',
  'A_M_OUT_Loop',
  'OUT_A',
  'A_OUT_A',
  'IN_Start',
  'IN_Loop',
  'Oral_Idle', // holding cum in mouth
  'Oral_Idle_IN',
  'Drink_IN',
  'Drink',
  'Drink_A',
  'Vomit_IN',
  'Vomit',
  'Vomit_A',
  // Penetration
  'Insert',
  'InsertIdle',
  'A_Insert',
  'A_InsertIdle',
  'WF_IN_Start', // female orgasm
  'WF_IN_Loop',
  'A_WF_IN_Start',
  'A_WF_IN_Loop',
  'WS_IN_Start', // double orgasm
  'WS_IN_Loop',
  'WS_IN_A',
  'A_WS_IN_Start',
  'A_WS_IN_Loop',
  'A_WS_IN_A',
  'M_IN_Start',
  'M_IN_Loop',
  'IN_A',
  'A_M_IN_Start',
  'A_M_IN_Loop',
  'A_IN_A',
  'Pull',
  'Drop',
  'A_Pull',
  'A_Drop',
  // Onanie
  'MLoop',
  'Orgasm',
  'Orgasm_A',
  'Orgasm_B',
  // Caress
  'M_Touch',
  'M_Idle',
  'Orgasm_Start',
  'Orgasm_Loop',
  'A_Touch',
  'K_Touch',
  'K_Idle',
  'K_Loop',
  'S_Touch',
  'S_Idle',
  'Front_Dislikes',
  'Back_Dislikes'
] as const
export type SupportedState = typeof SUPPORTED_STATES[number]

export enum LoopType {
  VARIABLE,
  STATIC,
  SINGLE
}

export enum AnimationMode {
  SCRIPT,
  AUTO
}

export const getAnimationMode = (animationName: string): AnimationMode | null => {
  if (SCRIPTED_ANIMS.find(a => a === animationName)) {
    return AnimationMode.SCRIPT
  } else if (AUTO_ANIMS.find(a => a === animationName)) {
    return AnimationMode.AUTO
  }
  return null
}

export const isAutoAnimation = (animationName: string) => !!AUTO_ANIMS.find(a => a === animationName)
export const isAnimationState = (animationName: string): boolean => !!SUPPORTED_STATES.find(s => s === animationName)
export const isSameAnimationStates = (a: SupportedState | null, b: SupportedState | null) => {
  if (a === b) {
    return true
  } else if (a === null || b === null) {
    return false
  }
  return matchStateToSpeed(a, 123) === matchStateToSpeed(b, 123)
}

export const matchStateToSpeed = (animState: SupportedState, speedFlag: number) => {
  switch (animState) {
    case 'Idle':
      return 10
    case 'M_Touch':
    case 'M_Idle':
    case 'A_Touch':
    case 'A_Idle':
    case 'S_Touch':
    case 'S_Idle':
      return 25 + speedFlag * 35
    case 'K_Idle':
    case 'K_Touch':
    case 'K_Loop':
      return 10 + Math.max(speedFlag * 25, 10)
    case 'Orgasm_Start':
    case 'Orgasm_Loop':
      return 30
    case 'Front_Dislikes':
    case 'Back_Dislikes':
      return 20
    default:
      error(`This should never happen ${animState}`)
      return 0
  }
}

export const calcAutoSpeed = (animState: SupportedState, speedFlag: number) => {
  const random = (Math.random() - 0.5) * 0.4 + 1 // 0.8 - 1.2
  return random * matchStateToSpeed(animState, speedFlag)
}
