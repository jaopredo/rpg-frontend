import APISource from "../source"
import PlayerServiceInterface from "@/types/services/player"
import Player from "@/types/models/player"

/* CLASSE QUE VAI OFERCER OS MÉTODOS PARA FAZER AS REQUISIÇÕES DE PLAYER */
export default class PlayerService implements PlayerServiceInterface {
    source = new APISource('player')
    
    register(data: Player) {
        return this.source.post<Player>('register', data)
    }

    login(data: Omit<Player, 'name'>) {
        return this.source.post<Omit<Player, 'name'>>('login', data)
    }

    test() {
        return this.source.get('')
    }
}