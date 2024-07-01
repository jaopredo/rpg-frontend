/* Tipos do Inventário */
// Tipo de um Item
export interface Item {
    name: string
    quantity: string
    weight: number
    weapon: boolean
    details: string

    damage?: string
    type: string
    range: string
}

// Tipo do Inventário
export interface Inventory {
    charId: string
    items: Item[]
}
