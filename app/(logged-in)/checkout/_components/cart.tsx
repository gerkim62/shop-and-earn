"use client";

import PickupStationModal from "@/components/modals/pickup-station";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CartItem, Product } from "@prisma/client";
import { CheckCircle, MapPin, Minus, Plus, Trash2 } from "lucide-react";
import EmptyCart from "./empty";

type CartItemWithProduct = CartItem & {
  product: Product;
};

type CartWithItemsWithProduct = {
  items: CartItemWithProduct[];
} | null;

type Props = {
  cart: CartWithItemsWithProduct | null;
};

export default function Cart({ cart }: Props) {
  if (!cart || cart.items.length === 0) {
    return <EmptyCart />;
  }

  const cartItems = cart.items.map((item) => ({
    id: item.id,
    name: item.product.name,
    price: item.product.price,
    quantity: item.quantity,
  }));

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const earnedRewards = 500; // Assume 500 KSH in rewards
  const total = Math.max(0, subtotal - earnedRewards);

  const isPaid = false;
  const deliveryLocation = null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cart Items</CardTitle>
      </CardHeader>
      <CardContent>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.price} KSH</p>
            </div>
            <div className="flex items-center ">
              <Button variant="outline" size="icon">
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-2">{item.quantity}</span>
              <Button variant="outline" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="ml-2">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        <Separator className="my-4" />
        <div className="flex justify-between font-semibold">
          <span>Subtotal:</span>
          <span>{subtotal} KSH</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Rewards Applied:</span>
          <span>-{earnedRewards} KSH</span>
        </div>
        <div className="flex justify-between font-bold text-lg mt-2">
          <span>Total:</span>
          <span>{total} KSH</span>
        </div>

        {/* Delivery Location Button */}
        <PickupStationModal>
          <Button
            className="w-full mt-6 mb-4"
            variant={deliveryLocation ? "outline" : "default"}
          >
            <MapPin className="mr-2 h-4 w-4" />
            {deliveryLocation
              ? "Change Delivery Location"
              : "Choose Delivery Location"}
          </Button>
        </PickupStationModal>

        {/* Display chosen location if available */}
        {deliveryLocation && (
          <Alert className="mb-4">
            <MapPin className="h-4 w-4" />
            <AlertTitle>Delivery Location</AlertTitle>
            <AlertDescription>{deliveryLocation}</AlertDescription>
          </Alert>
        )}

        {/* Payment Button */}
        <Button className="w-full" disabled={isPaid || !deliveryLocation}>
          {isPaid ? (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              Payment Completed
            </>
          ) : (
            "Proceed to Payment"
          )}
        </Button>

        {/* Payment Status */}
        {isPaid && (
          <Alert className="mt-4 bg-green-100 text-green-800">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Payment Successful</AlertTitle>
            <AlertDescription>
              Your order has been placed and will be delivered soon!
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
