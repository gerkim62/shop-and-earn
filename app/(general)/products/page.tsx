import SubmitButton from "@/components/small/submit-button";
import { Input } from "@/components/ui/input";
import prisma from "@/lib/prisma";
import ProductsPageSearchParamsSchema from "@/validation/pages/products";
import { Search } from "lucide-react";
import { redirect } from "next/navigation";
import NoProductsFound from "./_components/no-product";
import Product from "./_components/product";
import { Pagination } from "@/components/small/pagination";
import { getCurrentUser } from "@/auth/user";

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

  const [products, totalProducts] = await Promise.all([
    prisma.product.findMany({
      take: PRODUCTS_PER_PAGE,
      skip: (currentPage - 1) * PRODUCTS_PER_PAGE,
      where,
    }),
    prisma.product.count({ where }),
  ]);

  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  if (totalProducts === 0) return <NoProductsFound />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2 text-center text-purple-700">
        Browse Products
      </h1>
      <p className="text-xl text-center text-gray-600 mb-8">
        Discover products that you'll love!
      </p>

      {/* Search bar */}
      <form
        action={async (data: FormData) => {
          "use server";
          const search = data.get("search");
          redirect(`/products?search=${search}`);
        }}
        className="relative mb-8 flex"
      >
        <div className="relative flex-grow">
          <Input
            type="text"
            name="search"
            placeholder="Search cute products..."
            defaultValue={search}
            className="pl-10 pr-4 py-2 rounded-l-full border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <SubmitButton type="submit" className="rounded-r-full">
          Search
        </SubmitButton>
      </form>

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
