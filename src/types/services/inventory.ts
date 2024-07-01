import { AxiosResponse } from "axios"
import { APISourceInterface } from "../api"
import { Inventory, Item } from "../models/inventory"


export default interface InventoryServiceInterface {
    source: APISourceInterface

    get: (charId: string) => Promise<AxiosResponse>

    add: (charId: string, data: Item) => Promise<AxiosResponse>
    edit: (charId: string, itemId: string, quantity: number) => Promise<AxiosResponse>
    delete: (charId: string, itemId: string) => Promise<AxiosResponse>
}
