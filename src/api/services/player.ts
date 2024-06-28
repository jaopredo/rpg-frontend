import APIInterface from "../source"
import type { PlayerServiceInterface, PlayerData } from "@/types/services"

/* CLASSE QUE VAI OFERCER OS MÉTODOS PARA FAZER AS REQUISIÇÕES DE PLAYER */
export default class PlayerService implements PlayerServiceInterface {
    source = new APIInterface('player')
    
    register(data: PlayerData) {
        return this.source.post<PlayerData>('register', data)
    }

    login(data: Omit<PlayerData, 'name'>) {
        return this.source.post<Omit<PlayerData, 'name'>>('login', data)
    }

    test() {
        return this.source.get('')
    }
}