import APISource from "../source"
import ErrorHandler from "@/errors"

import InventoryServiceInterface from "@/types/services/inventory"
import { Item } from "@/types/models/inventory"


export default class InventoryService implements InventoryServiceInterface{
    source = new APISource('inventory')

    async get(charId: string) {
        try {
            return this.source.get('', { params: { charId } })
        } catch (e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }

    async add(charId: string, data: Item) {
        try {
            return this.source.put('item', data, { params: { charId } })
        } catch (e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }
    async edit(charId: string, itemId: string, quantity: number) {
        try {
            return this.source.patch('item', { quantity }, { params: { charId, itemId } })
        } catch (e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }
    async delete(charId: string, itemId: string) {
        try {
            return this.source.delete('item', { params: { charId, itemId } })
        } catch (e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }
}
