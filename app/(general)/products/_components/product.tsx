"use client";

import { removeFromCart } from "@/actions/cart";
import { createLipaMdogoMdogoOrder } from "@/actions/lipa-mdogo-mdogo";
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
import { ChevronLeft, ChevronRight, Edit, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  product: ProductType & { description: string };
  canEdit: boolean;
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => {
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

  const allImages = product.qualityImages.concat(product.images);

  const THIS_IS_FAKE = 100000000;

  return (
    <Card
      key={product.id}
      className="overflow-hidden transition-all duration-300 transform hover:shadow-lg"
    >
      <Carousel className="w-full max-w-xs mx-auto relative">
        <CarouselContent>
          {allImages.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                quality={100}
                height={212}
                width={160}
                src={image ?? "/placeholder.webp"}
                alt={`${product.name} - Image ${index + 1}`}
                className="h-[212px] w-auto mx-auto mt-2 object-fit"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <ChevronLeft className="h-6 w-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <ChevronRight className="h-6 w-6" />
        </CarouselNext>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {allImages.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                THIS_IS_FAKE === index ? "bg-purple-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </Carousel>
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
          disabled={loading}
          onClick={async () => {
            setLoading(true);
            try {
              const result:
                | undefined
                | {
                    success: boolean;
                    message: string;
                  } = await createLipaMdogoMdogoOrder({
                productId: product.id,
              });

              if (!result?.success && result?.message) {
                return toast.error(result.message);
              }
            } catch (error) {
              console.log(error);
              toast.error("Something went wrong!");
              setLoading(false);
            }
            setLoading(false);

            return;
          }}
          className={`bg-purple-500 hover:bg-purple-600 text-white w-full ${
            cartProductIds.includes(product.id) ? "hidden" : ""
          }`}
        >
          Order Now &rarr;
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
