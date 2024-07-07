"use server";

import prisma from "@/lib/prisma";
import { OrderStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { sendNotification } from "../../_actions/user";

export async function changeStatus({
  orderId,
  status,
}: {
  orderId: number;
  status: OrderStatus;
}) {
  const order = await prisma.order.update({
    where: { id: orderId },
    data: {
      status,
    },
  });

  await sendNotification({
    userId: order.userId,
    title: "Order Status Changed",
    message: `Your order #${order.id} status has been changed to ${status}. If you have any questions, please contact us.`,
    type: "purchase",
  });

  revalidatePath("/admin/orders");
  return order;
}
