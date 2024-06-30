import { AxiosRequestConfig } from "axios"
import AxiosInstance from ".."
import { updateRequestHeaders } from "@/functions"

/* TIPOS */
import type { APISourceInterface } from '@/types/api'


export default class APISource implements APISourceInterface {
    route = ''  // É colocado dependendo do serviço que instancia

    constructor(route: string) {
        this.route = route
    }

    public get(path: string, config?: AxiosRequestConfig) {
        config = updateRequestHeaders(config)
        return AxiosInstance.get(`${this.route}/${path}`, config)
    }

    public post<T>(path: string, data: T, config?: AxiosRequestConfig) {
        config = updateRequestHeaders(config)
        return AxiosInstance.post<T>(`${this.route}/${path}`, data, config)
    }

    public patch<T>(path: string, data: T, config?: AxiosRequestConfig) {
        config = updateRequestHeaders(config)
        return AxiosInstance.patch<T>(`${this.route}/${path}`, data, config)
    }

    public delete(path: string, config?: AxiosRequestConfig) {
        config = updateRequestHeaders(config)
        return AxiosInstance.delete(`${this.route}/${path}`, config)
    }
}
