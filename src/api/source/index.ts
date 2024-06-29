import AxiosInstance from ".."

/* TIPOS */
import type { APISource } from '@/types/api'


export default class APIInterface implements APISource {
    token = ''  // É colocado
    route = ''  // É colocado dependendo do serviço que instancia

    constructor(route: string) {
        this.route = route
        this.token = (typeof window !== 'undefined' ? localStorage.getItem('token') : '') as string
    }

    public setToken(token: string) {
        this.token = token
    }

    public get(path: string) {
        return AxiosInstance.get(
            `${path}/${this.route}`,
            {
                headers: {
                    Authorization: `JOJO ${this.token}`
                }
            }
        )
    }

    public post<T>(path: string, data: T) {
        return AxiosInstance.post<T>(`${path}/${this.route}`, data)
    }

    public patch<T>(path: string, data: T) {
        return AxiosInstance.patch<T>(`${path}/${this.route}`, data)
    }

    public delete(path: string, id: string) {
        return AxiosInstance.delete(`${path}/${this.route}/${id}`)
    }
}
