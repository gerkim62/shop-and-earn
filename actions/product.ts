"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateProductPrice({
  id,
  price,
}: {
  id: number;
  price: number;
}) {
  const product = await prisma.product.update({
    where: { id },
    data: {
      price,
    },
  });

  revalidatePath("/products");
  return product;
}
