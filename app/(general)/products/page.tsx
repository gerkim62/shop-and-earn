"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Product from "./_components/product";

// Mock data for products
const products = [
  {
    id: 1,
    title: "Cute Plushie",
    price: 1500,
    rating: 4.5,
    reviews: 120,
    image: "/logo.jpeg",
  },
  {
    id: 2,
    title: "Kawaii Stationery Set",
    price: 800,
    rating: 4.8,
    reviews: 95,
    image: "/api/placeholder/400/300",
  },
  {
    id: 3,
    title: "Pastel Headphones",
    price: 2500,
    rating: 4.2,
    reviews: 78,
    image: "/api/placeholder/400/300",
  },
  {
    id: 4,
    title: "Unicorn Backpack",
    price: 1800,
    rating: 4.7,
    reviews: 150,
    image: "/api/placeholder/400/300",
  },
  {
    id: 5,
    title: "Rainbow Socks Set",
    price: 500,
    rating: 4.6,
    reviews: 200,
    image: "/api/placeholder/400/300",
  },
  {
    id: 6,
    title: "Glitter Notebook",
    price: 300,
    rating: 4.4,
    reviews: 85,
    image: "/api/placeholder/400/300",
  },
  // Add more mock products as needed
];

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2 text-center text-purple-700">
        Browse Products
      </h1>
      <p className="text-xl text-center text-gray-600 mb-8">
        Discover products that you'll love!
      </p>

      {/* Search bar */}
      <div className="relative mb-8">
        <Input
          type="text"
          placeholder="Search cute products..."
          className="pl-10 pr-4 py-2 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 "
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Product key={product.id} />
        ))}
      </div>
      {/* 
      pagination component
      */}
    </div>
  );
};

export default ProductsPage;
