import { AxiosRequestConfig } from "axios"

export function updateRequestHeaders(config: AxiosRequestConfig|undefined): AxiosRequestConfig {
    const token = (typeof window !== 'undefined' ? localStorage.getItem('token') : '') as string
    return {
        ...config,
        headers: {
            ...config?config.headers:{},
            Authorization: `JOJO ${token}`
        }
    }
}
