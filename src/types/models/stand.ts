/* TODOS OS TIPOS DO STAND */
// Informações Básicas
export interface StandBasicInfo {
    name: String,
    standType: String,
    weakPoint: String,
    img: String,
}

// Atributos do Stand
export interface StandAttributes {
    strengh: number,
    speed: number,
    durability: number,
    precision: number,
    range: number,
    development: number
}

// Habilidades do Stand
export interface StandAbility {
    name: string,
    effect: string,
    dice: string,
    description: string
}

export interface StandAbilities {
    firstMain: StandAbility,
    secondMain: StandAbility,
    passive: StandAbility
}

// Combates do Stand
export interface StandCombat {
    damage: Number,
    shield: Number,
    bonus: Number
}

// Movimento do Stand
export interface StandMovement {
    range: String,
    apr: Number,
    movement: String,
    standJump: String
}

// Atos
export interface StandActSkeleton {
    img: string,
    attributes: StandAttributes,
    ability: StandAbility,
    combat: StandCombat,
    move: StandMovement
}

export interface StandActs {
    act1: StandActSkeleton
    act2: StandActSkeleton
    act3: StandActSkeleton
    act4: StandActSkeleton
}

// O Stand
export default interface Stand {
    charId: string
    basic: StandBasicInfo
    attributes: StandAttributes
    abilities: StandAbilities,
    combat: StandCombat
    move: StandMovement
    acts: StandActs
}
