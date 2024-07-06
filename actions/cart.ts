"use server";

import { getCurrentUserOrRedirect } from "@/auth/user";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function updateQuantity({
  productId,
  quantity,
}: {
  productId: number;
  quantity: number;
}) {
  // Update the quantity in the cart
  const user = await getCurrentUserOrRedirect();
  const cart = await prisma.cart.update({
    where: {
      userId: user.id,
    },
    data: {
      items: {
        updateMany: {
          where: {
            productId,
          },
          data: {
            quantity,
          },
        },
      },
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  return cart;
}

async function updatePickupStation({ stationId }: { stationId: number }) {
  // Update the selected pickup station
  const user = await getCurrentUserOrRedirect();
  const cart = await prisma.cart.update({
    where: {
      userId: user.id,
    },
    data: {
      stationId: stationId,
    },

    include: {
      station: true,
    },
  });

  return cart;
}

async function addToCart({ productId }: { productId: number }) {
  // Add the product to the cart
  const user = await getCurrentUserOrRedirect();
  //   if cat is there and item id is not there then add the item to the cart, if not then create a new cart
  const cart = await prisma.cart.upsert({
    where: {
      userId: user.id,
    },
    update: {
      items: {
        create: {
          product: {
            connect: {
              id: productId,
            },
          },
          quantity: 1,
        },
      },
    },
    create: {
      user: {
        connect: {
          id: user.id,
        },
      },
      items: {
        create: {
          product: {
            connect: {
              id: productId,
            },
          },
          quantity: 1,
        },
      },
    },
  });

  revalidatePath("/");
  return cart;
}

async function removeFromCart({ productId }: { productId: number }) {
  // Remove the item(s) from the cart
  const user = await getCurrentUserOrRedirect();
  const cart = await prisma.cart.update({
    where: {
      userId: user.id,
    },
    data: {
      items: {
        deleteMany: {
          productId: productId,
        },
      },
    },
  });
  return cart;
}

export { addToCart, removeFromCart, updatePickupStation, updateQuantity };
