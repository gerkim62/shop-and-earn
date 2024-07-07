import React from "react";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "./link-with-loader";

const FloatingProductsButton = () => {
  return (
    <div className="fixed bottom-20 right-4 z-50 sm:hidden">
      <Button
        asChild
        variant="default"
        size="lg"
        className="rounded-full shadow-lg bg-purple-600 hover:bg-purple-700 text-white"
      >
        <Link href="/products">
          {" "}
          <ShoppingBag className="w-6 h-6 mr-2" />
          <span>Products</span>
        </Link>
      </Button>
    </div>
  );
};

export default FloatingProductsButton;
