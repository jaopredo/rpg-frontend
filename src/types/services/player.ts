import { APISourceInterface } from "../api"
import { AxiosResponse } from "axios"

/* TIPO QUE MOSTRA QUAIS AS INFORMAÇÕES PASSADAS NOS MÉTODOS */
export interface PlayerData {
    name: string,
    email: string,
    password: string
}

export interface PlayerServiceInterface {
    source: APISourceInterface

    register: (
        data: PlayerData
    ) => Promise<AxiosResponse>

    login: (
        data: Omit<PlayerData, 'name'>
    ) => Promise<AxiosResponse>

    test: () => Promise<AxiosResponse>
}
