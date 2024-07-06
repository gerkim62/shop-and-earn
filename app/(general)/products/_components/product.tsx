"use client";

import { addToCart, removeFromCart } from "@/actions/cart";
import { useCart } from "@/components/context/cart";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Product as ProductType } from "@prisma/client";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

type Props = {
  product: ProductType & { description: string };
};

export default function Product({ product }: Props) {
  const [loading, setLoading] = useState(false);
  const { cartProductIds, setCartProductIds } = useCart();
  return (
    <Card
      key={product.id}
      className="overflow-hidden transition-all duration-300 transform hover:shadow-lg"
    >
      <Image
        height={212}
        width={160}
        src={product.images[0] ?? "/placeholder.webp"}
        alt={product.name}
        className="h-[212px] w-[160px] mx-auto mt-2 object-fit"
      />
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-purple-700">
          {product.manufacturer} {product.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-green-600">{product.price} KSH</p>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < Math.floor(5) ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">({6} reviews)</span>
        </div>
        <p className="mt-4 text-sm text-gray-600 ">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between ">
        <Button
          disabled={loading || cartProductIds.includes(product.id)}
          onClick={async () => {
            setLoading(true);
            try {
              await addToCart({
                productId: product.id,
              });
              toast.success("Added to cart!");
              setCartProductIds([...cartProductIds, product.id]);
            } catch (error) {
              toast.error("Failed to add to cart!");
            }

            setLoading(false);
          }}
          className={`bg-purple-500 hover:bg-purple-600 text-white w-full ${
            cartProductIds.includes(product.id) ? "hidden" : ""
          }`}
        >
          Add to Cart
        </Button>
        <Button
          disabled={loading || !cartProductIds.includes(product.id)}
          onClick={async () => {
            setLoading(true);
            try {
              await removeFromCart({
                productId: product.id,
              });
              setCartProductIds(
                cartProductIds.filter((id) => id !== product.id)
              );
              toast.success("Removed from cart!");
            } catch (error) {
              toast.error("Failed to remove from cart!");
            }
            setLoading(false);
          }}
          className={`bg-red-500 hover:bg-red-600 text-white w-full ${
            cartProductIds.includes(product.id) ? "" : "hidden"
          }`}
        >
          Remove from Cart
        </Button>
        {/* <Button
          variant="outline"
          className="text-pink-500 border-pink-500 hover:bg-pink-50"
        >
          <Heart className="h-5 w-5" />
        </Button> */}
      </CardFooter>
    </Card>
  );
}
