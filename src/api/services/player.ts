import APISource from "../source"
import ErrorHandler from "@/errors"

// Tipos
import PlayerServiceInterface from "@/types/services/player"
import Player from "@/types/models/player"

/* CLASSE QUE VAI OFERCER OS MÉTODOS PARA FAZER AS REQUISIÇÕES DE PLAYER */
export default class PlayerService implements PlayerServiceInterface {
    source = new APISource('player')
    
    public async register(data: Player) {
        try {
            return await this.source.post<Player>('register', data)
        } catch (e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }

    public async login(data: Omit<Player, 'name'>) {
        try {
            return await this.source.post<Omit<Player, 'name'>>('login', data)
        } catch (e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }

    public async test() {
        try {
            return await this.source.get('')
        } catch(e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }
}