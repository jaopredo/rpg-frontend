/* API SOURCE */
import APISource from "../source"

/* TYPES */
import CharacterServiceInterface, { LevelUpRequestBody } from "@/types/services/character"
import Character from "@/types/models/character"

export default class CharacterService implements CharacterServiceInterface {
    source = new APISource('character')

    // Adiciona um personagem novo na API
    public add(data: Omit<Character, "combat" | "level" | "abilities" | "playerId">) {
        return this.source.post('', data)
    }

    // Pega um personagem da API
    public get (id: string) {
        return this.source.get('', { params: { id } })
    }

    // Deleta um Personagem da API
    public delete (id: string) {
        return this.source.delete('', { params: { id } })
    }

    // Atualiza a vida de um personagem
    public updateLife (id: string, life: number) {
        return this.source.patch('life', { life }, { params: { id } })
    }
    // Atualiza a energia mental de um personagem
    public updateMentalEnergy(id: string, mentalEnergy: number) {
        return this.source.patch('mentalEnergy', { mentalEnergy }, { params: { id } })
    }
    // Atualiza o XP de um personagem
    public saveXP (id: string, xp: number) {
        return this.source.patch('saveXP', { actualXP: xp }, { params: { id } })
    }
    
    // Upa um personagem de nível
    public levelUP(id: string, body: LevelUpRequestBody) {
        return this.source.patch('levelUp', body, { params: { id } })
    }
}
