import { APISourceInterface } from "../api"
import { AxiosResponse } from "axios"

/* TODOS OS TIPOS DO PERSONAGEM */
// Informações básicas

export type CharacterRaces = "human"|"vampire"|"rockman"|"animal"
export type CharacterFightStyles = "hamon"|"spin"|"fencing"|"fighter"|"shooter"

export interface CharacterBasicInfo {
    name: string
    race: CharacterRaces
    age: string
    fightStyle: CharacterFightStyles
    occupation: string
}

// Atributos do Personagem
export interface CharacterAttributes {
    strengh: number
    dexterity: number
    constituition: number
    education: number
    mentality: number
    social: number
}

// Especialidades do Personagem
export interface CharacterStrengthSpecialities {
    athletics: boolean
    jump: boolean
    fight: boolean
    climb: boolean
}

export interface CharacterDexteritySpecialities {
    acrobacy: boolean
    stealth: boolean
    aim: boolean
    dodge: boolean
    reflex: boolean
}

export interface CharacterConstituitionSpecialities {
    force: boolean
    imunity: boolean
    painResistence: boolean
}

export interface CharacterEducationSpecialities {
    history: boolean
    geography: boolean
    math: boolean
    investigation: boolean
    forensic: boolean
    tecnology: boolean
    sociology: boolean
    art: boolean
    physics: boolean
    chemistry: boolean
    foreignLanguage: boolean
    programming: boolean
    policy: boolean
    religion: boolean
    mechanic: boolean
    biology: boolean
    medicine: boolean
}

export interface CharacterMentalitySpecialities {
    perception: boolean
    insight: boolean
    mindResistence: boolean
}

export interface CharacterSocialSpecialities {
    intimidation: boolean
    cheating: boolean
    acting: boolean
    charm: boolean
    sexy: boolean
    persuasion: boolean
}

export interface CharacterSpecialities {
    strength: CharacterStrengthSpecialities
    dexterity: CharacterDexteritySpecialities
    constituition: CharacterConstituitionSpecialities
    education: CharacterEducationSpecialities
    mentality: CharacterMentalitySpecialities
    social: CharacterSocialSpecialities
}

// Informações de Combate
export interface CharacterCombat {
    life: number
    actualLife: number
    mentalEnergy: number
    actualMentalEnergy: number
    movement: number
    da: number
}

// Habilidades do Personagem
export interface CharacterAbility {
    name: string
    description: string
}

export interface CharacterAbilities {
    race: CharacterAbility[]
    fightStyle: CharacterAbility[]
}

// Informações do Nível do Personagem
export interface CharacterLevel {
    actualLevel: number
    maxXP: number
    actualXP: number
}

// Tipo do Personagem
export default interface Character {
    playerId: string
    img: string
    basic: CharacterBasicInfo
    attributes: CharacterAttributes,
    specialities: CharacterSpecialities,
    combat: CharacterCombat,
    abilities: CharacterAbilities,
    level: CharacterLevel
}
