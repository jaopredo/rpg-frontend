import ErrorHandler from "@/errors"

/* API SOURCE */
import APISource from "../source"

/* TYPES */
import Stand from "@/types/models/stand"
import StandServiceInterface from "@/types/services/stand"

export default class StandService implements StandServiceInterface {
    source = new APISource('stand')

    async create(charId: string, body: Omit<Stand, "combat" | "move">) {
        try {
            return await this.source.post('', body, { params: { charId } })
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
