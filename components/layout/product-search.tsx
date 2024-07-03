import React from "react";
import { Search, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "../small/link-with-loader";
import { redirect } from "next/navigation";

export default function ProductSearch() {
  return (
    <div className="p-4 ">
      <div className=" flex items-center justify-between max-w-4xl mx-auto">
        {/* <Button
          asChild
          className="bg-purple-600 hover:bg-purple-700 text-white hidden sm:flex"
        >
          <Link href="/products">Browse Products</Link>
        </Button> */}
        <form
          action={async (formData) => {
            "use server";
            const search = formData.get("search");

            if (typeof search === "string") {
              redirect(`/products?search=${search}`);
            }
          }}
          className="flex w-full  items-center space-x-2 ml-4"
        >
          <Input
            name="search"
            type="text"
            placeholder="Search for products..."
            className="flex-grow rounded-md border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 w-full"
          />
          <Button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>
      </div>
    </div>
  );
}
