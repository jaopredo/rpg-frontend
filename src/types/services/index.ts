import { APISource } from "../api"

/* TIPO QUE MOSTRA QUAIS AS INFORMAÇÕES PASSADAS NOS MÉTODOS */
export interface PlayerData {
    name: string,
    email: string,
    password: string
}

export interface PlayerServiceInterface {
    source: APISource

    register: (
        data: PlayerData
    ) => Promise<any>

    login: (
        data: Omit<PlayerData, 'name'>
    ) => Promise<any>

    test: () => Promise<any>
}
