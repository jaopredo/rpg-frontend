import { AxiosResponse, AxiosRequestConfig } from "axios"

// Tipo que define as propriedades do recurso da API
export interface APISourceInterface {
    route: string

    get: (path: string, config?: AxiosRequestConfig) => Promise<AxiosResponse>
    post: <T>(path: string, data: T, config?: AxiosRequestConfig) => Promise<AxiosResponse>
    patch: <T>(path: string, data: T, config?: AxiosRequestConfig) => Promise<AxiosResponse>
    delete: (path: string, config?: AxiosRequestConfig) => Promise<AxiosResponse>
}
