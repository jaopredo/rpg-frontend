
export interface APISource {
    token: string
    route: string

    setToken: (token: string) => void

    get: (path: string) => Promise<any>
    post: <T>(path: string, data: T) => Promise<any>
    patch: <T>(path: string, data: T) => Promise<any>
    delete: (path: string, id: string) => Promise<any>
}
