"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import evaluateQualityImages from "./image-urls";
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

  try {
    await evaluateQualityImages(product);
  } catch (error) {
    console.log("Failed to evaluate quality images (product.ts)", error);
  }

  revalidatePath("/products");

  return product;
}
