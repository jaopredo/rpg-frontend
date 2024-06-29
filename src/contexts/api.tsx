'use client'
import { createContext, ReactNode } from "react"
import { useContext } from "react"
import type { APIProviderInterface } from "@/types/contexts"

/* SERVIÇOS */
import PlayerService from "@/api/services/player"

const APIContext = createContext<APIProviderInterface|null>(null)

export function APIProvider({ children }: { children: ReactNode }) {
    return <APIContext.Provider value={{
        playerService: new PlayerService
    }}>
        {children}
    </APIContext.Provider>
}

export function useAPIContext() {
    return (useContext(APIContext) as APIProviderInterface)
}
