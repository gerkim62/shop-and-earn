import React from "react";
import { ShoppingCart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "@/components/small/link-with-loader";

const EmptyCart = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <ShoppingCart className="w-16 h-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-6">
          You haven't added any items to your cart yet.
        </p>
        <Button
          asChild
          className="bg-purple-500 text-white hover:bg-purple-600 rounded-md shadow-sm"
        >
          <Link href={"/products"}>
            Browse Products
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmptyCart;
