import { AxiosResponse } from "axios"
import { APISourceInterface } from "../api"
import { Item } from "../models/inventory"


export default interface InventoryServiceInterface {
    source: APISourceInterface

    get: (charId: string) => Promise<void|AxiosResponse>

    add: (charId: string, data: Item) => Promise<void|AxiosResponse>
    edit: (charId: string, itemId: string, quantity: number) => Promise<void|AxiosResponse>
    delete: (charId: string, itemId: string) => Promise<void|AxiosResponse>
}
