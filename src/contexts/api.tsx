'use client'
import { createContext, ReactNode } from "react"
import { useContext } from "react"
import type { APIProviderInterface } from "@/types/contexts"

/* SERVIÇOS */
import PlayerService from "@/api/services/player"
import CharacterService from "@/api/services/character"
import StandService from "@/api/services/stand"
import SubstandService from "@/api/services/substand"
import InventoryService from "@/api/services/inventory"

const APIContext = createContext<APIProviderInterface|null>(null)

export function APIProvider({ children }: { children: ReactNode }) {
    return <APIContext.Provider value={{
        playerService: new PlayerService,
        characterService: new CharacterService,
        standService: new StandService,
        substandService: new SubstandService,
        inventoryService: new InventoryService
    }}>
        {children}
    </APIContext.Provider>
}

export function useAPIContext() {
    return (useContext(APIContext) as APIProviderInterface)
}
