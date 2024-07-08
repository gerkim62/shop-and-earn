import { getCurrentUser } from "@/auth/user";
import { Pagination } from "@/components/small/pagination";
import SubmitButton from "@/components/small/submit-button";
import { Input } from "@/components/ui/input";
import prisma from "@/lib/prisma";
import ProductsPageSearchParamsSchema from "@/validation/pages/products";
import { Search } from "lucide-react";
import { redirect } from "next/navigation";
import NoProductsFound from "./_components/no-product";
import Product from "./_components/product";
import SelectBrand from "./_components/select-brand";

const PRODUCTS_PER_PAGE = 12;

type Props = {
  searchParams: {
    page: number;
    search: string;
    brand: string;
  };
};

const ProductsPage = async ({ searchParams }: Props) => {
  const { page, search, brand } =
    ProductsPageSearchParamsSchema.parse(searchParams);

  console.log(page, search, brand);

  const currentPage = page;

  const user = await getCurrentUser();
  const userRole = user?.role ?? "USER";

  const where = {
    OR: [
      { name: { contains: search.trim(), mode: "insensitive" as const } },
      {
        description: { contains: search.trim(), mode: "insensitive" as const },
      },
    ],
    manufacturer: {
      contains: brand.trim(),
      mode: "insensitive" as const,
    },
    ...(userRole === "USER" ? { price: { gt: 0 } } : {}),
  };

  const brands = (
    await prisma.product.findMany({
      select: { manufacturer: true },
      distinct: ["manufacturer"],
    })
  ).map((product) => product.manufacturer);

  const [products, totalProducts] = await Promise.all([
    prisma.product.findMany({
      take: PRODUCTS_PER_PAGE,
      skip: (currentPage - 1) * PRODUCTS_PER_PAGE,
      where,
    }),
    prisma.product.count({ where }),
  ]);

  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2 text-center text-purple-700">
        Browse Products
      </h1>
      <p className="text-xl text-center text-gray-600 mb-8">
        Discover products that you'll love!
      </p>

      <form
        action={async (formData: FormData) => {
          "use server";
          const search = formData.get("search");
          const brand = formData.get("brand");
          const searchParams = new URLSearchParams();
          if (search) searchParams.append("search", search.toString());
          if (brand && brand !== "ALL")
            searchParams.append("brand", brand.toString());
          redirect(`/products?${searchParams.toString()}`);
        }}
        className="relative mb-8 flex flex-col sm:flex-row gap-4 sm:gap-0"
      >
        <SelectBrand brands={brands} selectedBrand={brand} />

        <div className="relative flex-grow">
          <Input
            type="text"
            name="search"
            placeholder="Search cute products..."
            defaultValue={search}
            className="pl-10 pr-4 py-2 rounded-full sm:rounded-none  border-2 sm:border-l-1 sm:border-r-0 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 w-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <SubmitButton
          type="submit"
          className="w-full sm:w-auto rounded-full sm:rounded-l-none"
        >
          Search Products &rarr;
        </SubmitButton>
      </form>

      {/* 
      showing x of n products
      */}

      {totalProducts > 0 && (
        <div className="mb-4 text-center">
          <p className="text-gray-600 text-sm">
            Showing{" "}
            <span className="font-semibold">
              {Math.min(
                (currentPage - 1) * PRODUCTS_PER_PAGE + 1,
                totalProducts
              )}
            </span>{" "}
            to{" "}
            <span className="font-semibold">
              {Math.min(currentPage * PRODUCTS_PER_PAGE, totalProducts)}
            </span>{" "}
            of <span className="font-semibold">{totalProducts}</span> products
          </p>
        </div>
      )}

      {totalProducts === 0 && <NoProductsFound />}

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Product
            canEdit={user?.role === "ADMIN" || user?.role === "EDITOR"}
            product={product}
            key={product.id}
          />
        ))}
      </div>

      {/* Pagination component */}
      <div className="mt-8">
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default ProductsPage;
