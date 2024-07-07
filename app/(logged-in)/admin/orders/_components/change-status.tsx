"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Order, OrderStatus } from "@prisma/client";
import { changeStatus } from "../_actions/change-status";
import { toast } from "sonner";

type Props = {
  order: Order;
};

export default function ChangeStatus({ order }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleStatusChange(orderId: number, status: OrderStatus) {
    setIsLoading(true);
    try {
      await changeStatus({
        orderId,
        status,
      });
      toast.success("Status changed.", {
        description: "Order status updated successfully.",
      });
    } catch (error) {
      toast.error("Status change error.", {
        description: "There was a problem updating the order status.",
      });
    }
    setIsLoading(false);
  }
  return (
    <Select
      disabled={isLoading}
      onValueChange={(value) => {
        if (Object.keys(OrderStatus).includes(value)) {
          handleStatusChange(order.id, value as OrderStatus);
        } else {
          toast.error("Error!", {
            description: `The selected status ${value} is unknown.`,
          });
        }
      }}
      defaultValue={order.status}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Change Status" />
      </SelectTrigger>
      <SelectContent>
        {/* <SelectItem value="PENDING">Pending</SelectItem> */}

        {Object.keys(OrderStatus).map((status) => {
          return (
            <SelectItem key={status} value={status}>
              {status}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
