import { AxiosRequestConfig } from "axios"

export function updateRequestHeaders(config: AxiosRequestConfig|undefined): AxiosRequestConfig {
    const token = (typeof window !== 'undefined' ? localStorage.getItem('token') : '') as string
    console.log(token)
    return {
        ...config,
        headers: {
            ...config?config.headers:{},
            Authorization: `JOJO ${token}`
        }
    }
}
