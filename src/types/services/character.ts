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

    get: (id: string) => Promise<AxiosResponse>
    add: (data: Omit<Character, 'combat' | 'level' | 'abilities' | 'playerId'>) => Promise<AxiosResponse>
    delete: (id: string) => Promise<AxiosResponse>

    updateLife: (id: string, life: number) => Promise<AxiosResponse>
    updateMentalEnergy: (id: string, mentalEnergy: number) => Promise<AxiosResponse>
    saveXP: (id: string, xp: number) => Promise<AxiosResponse>
    
    levelUP: (id: string, body: LevelUpRequestBody) => Promise<AxiosResponse>
    image?: (id: string, body: { charId: string, img: string }) => Promise<AxiosResponse>
}
