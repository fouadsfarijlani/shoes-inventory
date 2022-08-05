import { IInventory } from "../Segments/types"

export interface ISegmentProps extends IInventory{
    index: number
}

export interface styelMap {
    [key: number]: string
}