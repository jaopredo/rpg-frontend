import { APISourceInterface } from "../api"
import { AxiosResponse } from "axios"

import Player from "../models/player"

export interface PlayerServiceInterface {
    source: APISourceInterface

    register: (
        data: Player
    ) => Promise<AxiosResponse>

    login: (
        data: Omit<Player, 'name'>
    ) => Promise<AxiosResponse>

    test: () => Promise<AxiosResponse>
}
