/* API SOURCE */
import APISource from "../source"

/* TYPES */
import Stand from "@/types/models/stand"
import StandServiceInterface from "@/types/services/stand"

export default class StandService implements StandServiceInterface {
    source = new APISource('stand')

    create(charId: string, body: Omit<Stand, "combat" | "move">) {
        return this.source.post('', body, { params: { charId } })
    }

    get(charId: string) {
        return this.source.get('', { params: { charId } })
    }

    updateImage(standId: string, image: string) {
        return this.source.patch('image', { img: image }, { params: { standId } })
    }
}
