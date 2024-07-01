import { APISourceInterface } from "../api"
import { AxiosResponse } from "axios"

import Stand from "../models/stand"

export default interface StandServiceInterface {
    source: APISourceInterface

    get: (charId: string) => Promise<void|AxiosResponse>
    create: (charId: string, body: Omit<Stand, 'move'|'combat'>) => Promise<void|AxiosResponse>
    
    updateImage: (standId: string, image: string) => Promise<void|AxiosResponse>
}
