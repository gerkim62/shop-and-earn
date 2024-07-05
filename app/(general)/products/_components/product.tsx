import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

type Props = {};

export default function Product({}: Props) {
  const product = {
    id: 6,
    title: "Glitter Notebook",
    price: 300,
    rating: 4.4,
    reviews: 85,
    image: "/api/placeholder/400/300",
  };
  return (
    <Card
      key={product.id}
      className="overflow-hidden transition-all duration-300 transform hover:shadow-lg"
    >
      <Image
        height={200}
        width={300}
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover"
      />
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-purple-700">
          {product.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-green-600">{product.price} KSH</p>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < Math.floor(product.rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              fill="currentColor"
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">
            ({product.reviews} reviews)
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-purple-500 hover:bg-purple-600 text-white">
          Add to Cart
        </Button>
        <Button
          variant="outline"
          className="text-pink-500 border-pink-500 hover:bg-pink-50"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
