import ErrorHandler from "@/errors"

/* API SOURCE */
import APISource from "../source"

/* TYPES */
import CharacterServiceInterface, { LevelUpRequestBody } from "@/types/services/character"
import Character from "@/types/models/character"

export default class CharacterService implements CharacterServiceInterface {
    source = new APISource('character')

    // Adiciona um personagem novo na API
    async add(data: Omit<Character, "combat" | "level" | "abilities" | "playerId">) {
        try {
            return this.source.post('', data)
        } catch (e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }

    // Pega um personagem da API
    async get (id: string) {
        try {
            return this.source.get('', { params: { id } })
        } catch (e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }

    // Deleta um Personagem da API
    async delete (id: string) {
        try {
            return this.source.delete('', { params: { id } })
        } catch (e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }


    // Atualiza a vida de um personagem
    async updateLife (id: string, life: number) {
        try {
            return this.source.patch('life', { life }, { params: { id } })
        } catch (e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }
    // Atualiza a energia mental de um personagem
    async updateMentalEnergy(id: string, mentalEnergy: number) {
        try {
            return this.source.patch('mentalEnergy', { mentalEnergy }, { params: { id } })
        } catch (e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }
    // Atualiza o XP de um personagem
    async saveXP (id: string, xp: number) {
        try {
            return this.source.patch('saveXP', { actualXP: xp }, { params: { id } })
        } catch (e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }
    

    // Upa um personagem de nível
    async levelUP(id: string, body: LevelUpRequestBody) {
        try {
            return this.source.patch('levelUp', body, { params: { id } })
        } catch (e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }
}
