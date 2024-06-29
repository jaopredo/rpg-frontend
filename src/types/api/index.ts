import { AxiosResponse } from "axios"

export interface APISource {
    token: string
    route: string

    setToken: (token: string) => void

    get: (path: string) => Promise<AxiosResponse>
    post: <T>(path: string, data: T) => Promise<AxiosResponse>
    patch: <T>(path: string, data: T) => Promise<AxiosResponse>
    delete: (path: string, id: string) => Promise<AxiosResponse>
}
