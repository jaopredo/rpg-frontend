import APISource from "../source"

import Substand from "@/types/models/substand"
import { SubStandServiceInterface } from "@/types/services/substand"


export default class SubstandService implements SubStandServiceInterface {
    source = new APISource('substand')

    create(charId: string, body: Omit<Substand, "move" | "combat">) {
        return this.source.post('', body, { params: { charId } })
    }

    get(charId: string) {
        return this.source.get('', { params: { charId } })
    }

    updateImage(standId: string, image: string) {
        return this.source.patch('image', { img: image }, { params: { standId } })
    }
}
