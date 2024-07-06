// AdminDashboard.tsx (Server Component)
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { OrdersTable } from "./_components/orders-table";
import { ProductsTable } from "./_components/products-table";
import { UsersTable } from "./_components/users-table";
import { SearchBar } from "./_components/search-bar";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { MAX_ITEMS_PER_PAGE } from "./_constants";

const QueryParamsSchema = z.object({
  products_page: z.coerce.number().catch(1),
  users_page: z.coerce.number().catch(1),
  orders_page: z.coerce.number().catch(1),
});

type Props = {
  searchParams: z.infer<typeof QueryParamsSchema>;
};

export default async function AdminDashboard({ searchParams }: Props) {
  const {
    products_page: productsPage,
    users_page: usersPage,
    orders_page: ordersPage,
  } = QueryParamsSchema.parse(searchParams);

  const ordersPromise = prisma.order.findMany({
    take: MAX_ITEMS_PER_PAGE,
    skip: (ordersPage - 1) * MAX_ITEMS_PER_PAGE,

    include: {
      user: {
        select: {
          fullName: true,
        },
      },
    },
  });
  const productsPromise = prisma.product.findMany({
    take: MAX_ITEMS_PER_PAGE,
    skip: (ordersPage - 1) * MAX_ITEMS_PER_PAGE,
  });
  const usersPromise = prisma.user.findMany({
    take: MAX_ITEMS_PER_PAGE,
    skip: (ordersPage - 1) * MAX_ITEMS_PER_PAGE,
  });

  const [orders, products, users] = await Promise.all([
    ordersPromise,
    productsPromise,
    usersPromise,
  ]);

  return (
    <div className="min-h-screen bg-purple-50 p-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-800">
            Admin Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SearchBar />
          <Tabs >
            <TabsList className="w-full mb-4">
              {/* <TabsTrigger value="orders">Orders</TabsTrigger> */}
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>
            <TabsContent value="orders">
              <OrdersTable initialOrders={orders} />
            </TabsContent>
            <TabsContent value="products">
              <ProductsTable initialProducts={products} />
            </TabsContent>
            <TabsContent value="users">
              <UsersTable initialUsers={users} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
