import type PlayerServiceInterface from '../services/player'
import type CharacterServiceInterface from '../services/character'
import type StandServiceInterface from '../services/stand'
import type SubStandServiceInterface from '../services/substand'
import type InventoryServiceInterface from '../services/inventory'

/**
 * Mostra quais são as propriedades de API Provider (Fornece os serviços de API)
 * 
 * @interface
 * @name APIProviderInterface
 * @kind interface
 * @exports
 */
export interface APIProviderInterface {
    playerService: PlayerServiceInterface
    characterService: CharacterServiceInterface
    standService: StandServiceInterface
    substandService: SubStandServiceInterface
    inventoryService: InventoryServiceInterface
}
