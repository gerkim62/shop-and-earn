"use server";

async function updateQuantity({ id, quantity }: { id: number; quantity: number }) {
  // Update the quantity in the cart
}

async function removeItem({ id }: { id: number }) {
  // Remove the item from the cart
}

async function updatePickupStation(stationId: number) {
  // Update the selected pickup station
}

export { updateQuantity, removeItem, updatePickupStation };
