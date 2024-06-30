import Character from "@/types/models/character"
import APISource from "../source"
import { CharacterServiceInterface, LevelUpRequestBody } from "@/types/services/character"

export default class CharacterService implements CharacterServiceInterface {
    source = new APISource('character')

    public add(data: Omit<Character, "combat" | "level" | "abilities" | "playerId">) {
        return this.source.post('', data)
    }

    public get (id: string) {
        return this.source.get('', { params: { id } })
    }

    public delete (id: string) {
        return this.source.delete('', { params: { id } })
    }


    public updateLife (id: string, life: number) {
        return this.source.patch('life', { life }, { params: { id } })
    }
    public updateMentalEnergy(id: string, mentalEnergy: number) {
        return this.source.patch('mentalEnergy', { mentalEnergy }, { params: { id } })
    }
    public saveXP (id: string, xp: number) {
        return this.source.patch('saveXP', { actualXP: xp }, { params: { id } })
    }
    
    public levelUP(id: string, body: LevelUpRequestBody) {
        return this.source.patch('levelUp', body, { params: { id } })
    }
}
