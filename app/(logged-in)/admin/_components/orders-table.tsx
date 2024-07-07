// OrdersTable.tsx (Client Component)
"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { OrderStatus } from "@prisma/client";
import { Pagination as PaginationType, SearchTarget } from "../_types";
import { Pagination } from "@/components/small/pagination";
import { toast } from "sonner";
import { useLocalStorage } from "usehooks-ts";
import { SEARCH_TARGET_LOCALSTORAGE_KEY } from "../_constants";

type OrderWithUser = {
  id: number;
  totalAmount: number;
  status: OrderStatus;
  user: {
    fullName: string;
  };
};

export function OrdersTable({
  initialOrders,
  pagination,
}: {
  initialOrders: OrderWithUser[];
  pagination: PaginationType;
}) {
  const [orders] = useState(initialOrders);
  const [, setSearchTarget] = useLocalStorage<SearchTarget>(
    SEARCH_TARGET_LOCALSTORAGE_KEY,
    "orders"
  );

  useEffect(() => {
    toast("OrdersTable component mounted");
    setSearchTarget("orders");
  }, [setSearchTarget]);

  return (
    <>
      <Table>
        <TableCaption>A list of all orders</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.user.fullName}</TableCell>
              <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    {
                      PENDING: "bg-yellow-100 text-yellow-800",
                      PROCESSING: "bg-blue-100 text-blue-800",
                      SHIPPED: "bg-green-100 text-green-800",
                      DELIVERED: "bg-purple-100 text-purple-800",
                      CANCELED: "bg-red-100 text-red-800",
                    }[order.status]
                  }`}
                >
                  {order.status}
                </span>
              </TableCell>
              <TableCell>
                <Select
                  // onValueChange={(newStatus) =>
                  //   handleStatusChange(order.id, newStatus)
                  // }
                  defaultValue={order.status}
                >
                  <SelectTrigger className="border-purple-200 rounded-full text-purple-700">
                    <SelectValue placeholder="Change Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(OrderStatus).map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination {...pagination} currentPageIdentifier="orders_page" />
    </>
  );
}
