import type { PlayerServiceInterface } from '../services/player'
import type { CharacterServiceInterface } from '../services/character'

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
}
