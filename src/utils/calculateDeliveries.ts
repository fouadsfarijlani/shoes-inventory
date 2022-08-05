import { IInventory } from "../Components/Segments/types";

export const calculateDeliveries = (qty: number, scheduledDeliveries: IInventory[]): IInventory[] => {
    let deliveryQty = qty;
    let newSchedule: IInventory[] = [];

    for (const item of scheduledDeliveries) {
      if (item.quantity === 0) continue;
      if (deliveryQty >= item.quantity) {
        newSchedule.push({date: item.date, quantity: item.quantity});
        deliveryQty = deliveryQty - item.quantity;
      }
      if (deliveryQty <= item.quantity && deliveryQty !== 0) {
        newSchedule.push({date: item.date, quantity: deliveryQty});
        break;
      }
      if (deliveryQty === 0) break;
    }
    return newSchedule;
  }