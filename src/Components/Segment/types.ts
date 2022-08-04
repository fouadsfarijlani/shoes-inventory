export interface IInventory {
    date: Date,
    quantity: number,
}

export interface ISegmentProps extends IInventory{
    index: number
}

export interface styelMap {
    [key: number]: string
}