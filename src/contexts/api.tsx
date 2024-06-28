import { createContext, ReactNode } from "react"
import { useContext } from "react"



const APIContext = createContext(null)

export function APIProvider({ children }: { children: ReactNode }) {
    return <APIContext.Provider value={null}>
        {children}
    </APIContext.Provider>
}

export function useAPIContext() {
    return useContext(APIContext)
}
