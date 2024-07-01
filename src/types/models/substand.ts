import { StandBasicInfo, StandAttributes, StandAbility, StandCombat, StandMovement } from "./stand"

export default interface Substand {
    basic: StandBasicInfo
    attributes: StandAttributes
    ability: StandAbility
    combat: StandCombat
    move: StandMovement
}
