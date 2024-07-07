"use server";

import prisma from "@/lib/prisma";

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
  return product;
}
