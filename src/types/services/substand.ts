import { APISourceInterface } from "../api"
import { AxiosResponse } from "axios"

import Substand from "../models/substand"

export default interface SubStandServiceInterface {
    source: APISourceInterface

    get: (charId: string) => Promise<void|AxiosResponse>
    create: (charId: string, body: Omit<Substand, 'move'|'combat'>) => Promise<void|AxiosResponse>
    
    updateImage: (standId: string, image: string) => Promise<void|AxiosResponse>
}