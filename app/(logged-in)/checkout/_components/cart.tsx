"use client";

import { removeFromCart, updateQuantity } from "@/actions/cart";
import { useCart } from "@/components/context/cart";
import MpesaPaymentDialog from "@/components/modals/mpesa-payment";
import PickupStationModal from "@/components/modals/pickup-station";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatNumber } from "@/lib/utils";
import { CartItem, City, Product, Region, Station } from "@prisma/client";
import { CheckCircle, MapPin, Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import EmptyCart from "./empty";

type CartItemWithProduct = CartItem & {
  product: Product;
};

export type CityWithStations = City & {
  stations: Station[];
};

export type RegionWithCitiesWithStations = Region & {
  cities: CityWithStations[];
};

type CartWithItemsWithProduct = {
  items: CartItemWithProduct[];
  station: Station | null;
} | null;

type Props = {
  cart: CartWithItemsWithProduct | null;
  regions: RegionWithCitiesWithStations[];
  referralBalance: number;
};

const MINIMUM_AMOUNT_USER_MUST_PAY = 400;

export default function Cart({ cart, regions, referralBalance }: Props) {
  type Status = "idle" | "deleting" | "incrementing" | "decrementing";
  const { setCartProductIds } = useCart();

  const [status, setStatus] = useState<Status>("idle");
  const [deliveryStation, setDeliveryStation] = useState<Station | null>(
    cart?.station || null
  );

  const items = cart?.items.map((item) => ({
    id: item.id,
    name: item.product.manufacturer + " " + item.product.name,
    discountedPrice:
      item.product.price - (item.product.discount * item.product.price) / 100,
    actualPrice: item.product.price,
    quantity: item.quantity,
    productId: item.productId,
    discount: item.product.discount,
  }));
  const [cartItems, setCartItems] = useState(items || []);

  if (!cart || cart.items.length === 0) {
    return <EmptyCart />;
  }

  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );

  const deliveryFee =
    Number(deliveryStation?.fee.replace(/\D/g, "") || "0") ?? 0;

  const tax = Math.round(0.16 * cartTotal);

  const grandTotal = cartTotal + deliveryFee + tax;

  const netToPay = Math.max(
    Math.min(MINIMUM_AMOUNT_USER_MUST_PAY, cartTotal),
    grandTotal - referralBalance
  );
  const deductedReferralBalance = grandTotal - netToPay;

  const isPaid = false;

  if (cartItems.length === 0) return <EmptyCart />;

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
              <p className="text-sm text-gray-600">
                {formatNumber(item.discountedPrice)} KSH
              </p>
              <p>
                <span className="line-through text-gray-500">
                  {formatNumber(item.actualPrice)} KSH
                </span>{" "}
                <span className="text-green-600">{item.discount}% off</span>
              </p>
            </div>
            <div className="flex items-center">
              <Button
                onClick={async () => {
                  try {
                    setStatus("decrementing");
                    await updateQuantity({
                      productId: item.productId,
                      quantity: item.quantity - 1,
                    });

                    setCartItems((prev) =>
                      prev.map((cItem) =>
                        cItem.productId === item.productId
                          ? { ...cItem, quantity: cItem.quantity - 1 }
                          : cItem
                      )
                    );
                    toast.success("Item quantity decremented");
                  } catch (error) {
                    toast.error("Failed to decrement item quantity");
                  }
                  setStatus("idle");
                }}
                disabled={status !== "idle" || item.quantity <= 1}
                variant="outline"
                size="icon"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-2">{item.quantity}</span>
              <Button
                onClick={async () => {
                  try {
                    setStatus("incrementing");
                    await updateQuantity({
                      productId: item.productId,
                      quantity: item.quantity + 1,
                    });

                    setCartItems((prev) =>
                      prev.map((cItem) =>
                        cItem.productId === item.productId
                          ? { ...cItem, quantity: cItem.quantity + 1 }
                          : cItem
                      )
                    );
                    toast.success("Item quantity incremented");
                  } catch (error) {
                    toast.error("Failed to increment item quantity");
                  }
                  setStatus("idle");
                }}
                disabled={status !== "idle"}
                variant="outline"
                size="icon"
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                disabled={status !== "idle"}
                onClick={async () => {
                  try {
                    setStatus("deleting");
                    await removeFromCart({
                      productId: item.productId,
                    });

                    setCartProductIds((prev) =>
                      prev.filter((id) => id !== item.productId)
                    );
                    setCartItems((prev) =>
                      prev.filter((cItem) => cItem.productId !== item.productId)
                    );
                  } catch (error) {
                    toast.error("Failed to delete item from cart");
                  }
                  setStatus("idle");
                }}
                variant="ghost"
                size="icon"
                className="ml-2"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        <Separator className="my-4" />
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>{formatNumber(cartTotal)} KSH</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (16%):</span>
            <span>{formatNumber(tax)} KSH</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee:</span>
            <span>{formatNumber(deliveryFee)} KSH</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Referrals Applied:</span>
            <span>-{formatNumber(deductedReferralBalance)} KSH</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-2">
            <span>Total:</span>
            <span>{formatNumber(netToPay)} KSH</span>
          </div>
        </div>

        <PickupStationModal
          setDeliveryStation={setDeliveryStation}
          regions={regions}
        >
          <Button
            className="w-full mt-6 mb-4"
            variant={deliveryStation ? "outline" : "default"}
          >
            <MapPin className="mr-2 h-4 w-4" />
            {deliveryStation
              ? "Change Delivery Location"
              : "Choose Delivery Location"}
          </Button>
        </PickupStationModal>

        {deliveryStation && (
          <Alert className="mb-4">
            <MapPin className="h-4 w-4" />
            <AlertTitle>Delivery Location</AlertTitle>
            <AlertDescription>{deliveryStation.address}</AlertDescription>
          </Alert>
        )}

        <MpesaPaymentDialog
          referralBalance={deductedReferralBalance}
          total={grandTotal}
        >
          <Button className="w-full" disabled={isPaid || !deliveryStation}>
            {isPaid ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Payment Completed
              </>
            ) : (
              "Proceed to Payment"
            )}
          </Button>
        </MpesaPaymentDialog>

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
