import { APISourceInterface } from "../api"
import { AxiosResponse } from "axios"

import Stand from "../models/stand"

export interface StandServiceInterface {
    source: APISourceInterface

    get: (charId: string) => Promise<AxiosResponse>
    create: (charId: string, body: Omit<Stand, 'move'|'combat'>) => Promise<AxiosResponse>
    
    updateImage: (standId: string, image: string) => Promise<AxiosResponse>
}
