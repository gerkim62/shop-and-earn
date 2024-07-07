import NothingHere from "@/components/small/nothing-here";
import { Pagination } from "@/components/small/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { MAX_ITEMS_PER_PAGE } from "../_constants";
import ChangeStatus from "./_components/change-status";
import { getCurrentUserOrRedirect } from "@/auth/user";
import Denied from "../_components/denied";

const QueryParamsSchema = z.object({
  page: z.coerce.number().catch(1),
  sort_order: z.enum(["asc", "desc"]).catch("desc"),
  sort_key: z.enum(["totalAmount", "status", "createdAt"]).catch("totalAmount"),
});

type Props = {
  searchParams: z.infer<typeof QueryParamsSchema>;
};
const OrdersPage = async ({ searchParams }: Props) => {
  const { page, sort_key, sort_order } = QueryParamsSchema.parse(searchParams);

  const currentUser = await getCurrentUserOrRedirect();

  if (currentUser.role === "USER") {
    return <Denied />;
  }

  // In a real implementation, you would fetch orders from the database
  const orders = await prisma.order.findMany({
    take: MAX_ITEMS_PER_PAGE,
    skip: (page - 1) * MAX_ITEMS_PER_PAGE,
    orderBy: {
      [sort_key]: sort_order,
    },
  });

  const totalOrders = await prisma.order.count();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Orders ({totalOrders} total)</h1>

      {orders.length === 0 ? (
        <NothingHere
          icon={"alert"}
          title="No orders found"
          message={"There are no orders in the system."}
        />
      ) : (
        <Table className="mb-4 whitespace-nowrap">
          <TableHeader>
            <TableRow>
              <TableHead>Order #</TableHead>
              <TableHead>Amount (KSH)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Change Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.totalAmount.toFixed(2)}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  {new Date(order.createdAt).toLocaleString()}
                </TableCell>
                <TableCell>
                  <ChangeStatus order={order} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Pagination
        currentPage={page}
        totalPages={Math.ceil(totalOrders / MAX_ITEMS_PER_PAGE)}
      />
    </div>
  );
};

export default OrdersPage;
