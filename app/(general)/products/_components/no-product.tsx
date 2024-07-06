import React from "react";
import { Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "@/components/small/link-with-loader";

const NoProductsFound = () => {
  return (
    <Card className="w-full min-h-[70vh] pt-10 max-w-md mx-auto border-0">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <Search className="w-16 h-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          No products found
        </h2>
        <p className="text-gray-600 mb-6">
          We couldn't find any products matching your search.
        </p>
        <Button
          asChild
          className="bg-purple-500 text-white hover:bg-purple-600 rounded-md shadow-sm"
        >
          <Link href={"/products"}>
            Back to All Products
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default NoProductsFound;