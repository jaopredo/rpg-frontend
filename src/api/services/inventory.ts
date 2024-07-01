import APISource from "../source"

import InventoryServiceInterface from "@/types/services/inventory"
import { Item } from "@/types/models/inventory"


export default class InventoryService implements InventoryServiceInterface{
    source = new APISource('inventory')

    get(charId: string) {
        return this.source.get('', { params: { charId } })
    }

    add(charId: string, data: Item) {
        return this.source.put('item', data, { params: { charId } })
    }
    edit(charId: string, itemId: string, quantity: number) {
        return this.source.patch('item', { quantity }, { params: { charId, itemId } })
    }
    delete(charId: string, itemId: string) {
        return this.source.delete('item', { params: { charId, itemId } })
    }
}
