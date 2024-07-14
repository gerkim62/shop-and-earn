"use server";

import { getCurrentUserOrRedirect } from "@/auth/user";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import evaluateQualityImages from "./image-urls";

export async function createLipaMdogoMdogoOrder({
  productId,
}: {
  productId: number;
}) {
  const user = await getCurrentUserOrRedirect();
  try {
    const order = await prisma.lipaMdogoMdogoOrder.create({
      data: {
        productId: productId,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
      include: {
        product: true,
      },
    });

    try {
      await evaluateQualityImages(order.product);
    } catch (error) {
      console.log("Failed to evaluate quality images", error);
    }

    revalidatePath("/lipa-mdogo-mdogo");
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong, please retry.",
    };
  }

  redirect("/lipa-mdogo-mdogo");
}

export async function updateLMMPickupStation({
  stationId,
}: {
  stationId: number;
}) {
  const user = await getCurrentUserOrRedirect();
  const updated = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      lipaMdogoMdogoOrder: {
        update: {
          stationId: stationId,
        },
      },
    },
  });

  revalidatePath("/lipa-mdogo-mdogo");

  return updated;
}
