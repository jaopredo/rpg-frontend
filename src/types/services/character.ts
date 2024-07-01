import { APISourceInterface } from "../api"
import { AxiosResponse } from "axios"
import Character, {
    CharacterAttributes,

    CharacterSpecialities,
    CharacterStrengthSpecialities,
    CharacterDexteritySpecialities,
    CharacterConstituitionSpecialities,
    CharacterEducationSpecialities,
    CharacterMentalitySpecialities,
    CharacterSocialSpecialities
} from "../models/character"

/**
 * Interface que mostra propriedades da Requisição de UPAR NÍVEL
 * 
 * @interface
 * @name LevelUpRequestBody
 * @kind interface
 * @exports
 */
export interface LevelUpRequestBody {
    type: "attribute"|"spec",
    obj: Partial<CharacterAttributes> | {
        label: keyof CharacterSpecialities,
        spec: keyof CharacterStrengthSpecialities | keyof CharacterDexteritySpecialities | keyof CharacterConstituitionSpecialities | keyof CharacterEducationSpecialities | keyof CharacterMentalitySpecialities | keyof CharacterSocialSpecialities
    }
}

export default interface CharacterServiceInterface {
    source: APISourceInterface

    get: (id: string) => Promise<void|AxiosResponse>
    add: (data: Omit<Character, 'combat' | 'level' | 'abilities' | 'playerId'>) => Promise<void|AxiosResponse>
    delete: (id: string) => Promise<void|AxiosResponse>

    updateLife: (id: string, life: number) => Promise<void|AxiosResponse>
    updateMentalEnergy: (id: string, mentalEnergy: number) => Promise<void|AxiosResponse>
    saveXP: (id: string, xp: number) => Promise<void|AxiosResponse>
    
    levelUP: (id: string, body: LevelUpRequestBody) => Promise<void|AxiosResponse>
    image?: (id: string, body: { charId: string, img: string }) => Promise<void|AxiosResponse>
}
