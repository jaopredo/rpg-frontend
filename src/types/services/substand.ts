import { APISourceInterface } from "../api"
import { AxiosResponse } from "axios"

import Substand from "../models/substand"

export interface SubStandServiceInterface {
    source: APISourceInterface

    get: (charId: string) => Promise<AxiosResponse>
    create: (charId: string, body: Omit<Substand, 'move'|'combat'>) => Promise<AxiosResponse>
    
    updateImage: (standId: string, image: string) => Promise<AxiosResponse>
}