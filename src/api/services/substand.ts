import APISource from "../source"
import ErrorHandler from "@/errors"

import Substand from "@/types/models/substand"
import SubStandServiceInterface from "@/types/services/substand"


export default class SubstandService implements SubStandServiceInterface {
    source = new APISource('substand')

    async create(charId: string, body: Omit<Substand, "move" | "combat">) {
        try {
            return this.source.post('', body, { params: { charId } })
        } catch (e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }

    async get(charId: string) {
        try {
            return this.source.get('', { params: { charId } })
        } catch (e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }

    async updateImage(standId: string, image: string) {
        try {
            return this.source.patch('image', { img: image }, { params: { standId } })
        } catch (e: any) {
            ErrorHandler.add([e.response.data.msg])
        }
    }
}
