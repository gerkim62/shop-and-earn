"use client";

import { addToCart, removeFromCart } from "@/actions/cart";
import { useCart } from "@/components/context/cart";
import EditProductModal from "@/components/modals/edit-product";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";
import { Product as ProductType } from "@prisma/client";
import { Edit, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

type Props = {
  product: ProductType & { description: string };
  canEdit: boolean;
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => {
        // const starValue = i + 1;
        return (
          <div key={i} className="relative">
            <Star className="h-5 w-5 text-gray-300" fill="currentColor" />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: `${Math.max(0, Math.min(100, (rating - i) * 100))}%`,
                overflow: "hidden",
              }}
            >
              <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function Product({ product, canEdit }: Props) {
  const [loading, setLoading] = useState(false);
  const discount = product.discount;
  const { cartProductIds, setCartProductIds } = useCart();

  const originalPrice = product.price;
  const discountedPrice = originalPrice - (originalPrice * discount) / 100;
  const rating = product.rating;
  const reviewsCount = product.reviewsCount;

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
        <div className="flex items-baseline">
          <p className="text-2xl font-bold text-green-600">
            {formatNumber(discountedPrice)} KSH
          </p>
          <p className="ml-2 text-sm line-through text-gray-500">
            {formatNumber(originalPrice)} KSH
          </p>
        </div>
        {discount > 0 && (
          <p className="text-sm font-semibold text-red-500 mt-1">
            {discount}% off!
          </p>
        )}
        <div className="flex items-center mt-2">
          <StarRating rating={rating} />
          <span className="ml-2 text-sm text-gray-600">
            ({reviewsCount} reviews)
          </span>
        </div>
        <p className="mt-4 text-sm text-gray-600">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
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
        <EditProductModal product={product}>
          <Button
            variant="outline"
            className={`text-pink-500 border-pink-500 hover:bg-pink-50 ml-4 ${
              canEdit ? "" : "hidden"
            }`}
          >
            <Edit className="h-5 w-5" />
          </Button>
        </EditProductModal>
      </CardFooter>
    </Card>
  );
}
