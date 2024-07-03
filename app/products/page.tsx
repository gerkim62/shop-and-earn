"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import { Star, Search, Heart } from "lucide-react";

// Mock data for products
const mockProducts = [
  {
    id: 1,
    title: "Cute Plushie",
    price: 1500,
    rating: 4.5,
    reviews: 120,
    image: "/api/placeholder/400/300",
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
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Filter products based on search term
  const filteredProducts = mockProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2 text-center text-purple-700">
        Our Products
      </h1>
      <p className="text-xl text-center text-gray-600 mb-8">
        Discover products that you'll love!
      </p>

      {/* Search bar */}
      <div className="relative mb-8">
        <Input
          type="text"
          placeholder="Search cute products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProducts.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-purple-700">
                {product.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">
                {product.price} KSH
              </p>
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
        ))}
      </div>

      {/* <div className="mt-8 flex justify-center">
        <Pagination>
          <Pagination.Content>
            <Pagination.Item onClick={() => paginate(1)} isActive={currentPage === 1}>
              1
            </Pagination.Item>
            <Pagination.Item onClick={() => paginate(2)} isActive={currentPage === 2}>
              2
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
      </div> */}
    </div>
  );
};

export default ProductsPage;
