"use server";

import { sendNotification } from "@/app/(logged-in)/admin/_actions/user";
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

async function graduateCartToOrder({
  grandTotal,
  referralAmountToDeduct,
}: {
  grandTotal: number;
  referralAmountToDeduct: number;
}) {
  try {
    console.log("Fetching current user...");
    const user = await getCurrentUserOrRedirect();
    console.log("Current user fetched:", user);

    console.log("Fetching cart for user ID:", user.id);
    const cart = await prisma.cart.findUnique({
      where: {
        userId: user.id,
      },
    });

    if (!cart) {
      console.error("Cart not found for user ID:", user.id);
      throw new Error("Cart not found");
    }
    console.log("Cart found:", cart);

    const totalAmount = grandTotal;
    console.log("Grand total calculated:", totalAmount);

    console.log(
      "Starting transaction to create order and update user balance..."
    );
    const [order] = await prisma.$transaction([
      prisma.order.create({
        data: {
          totalAmount,
          userId: user.id,
        },
      }),
      prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          balance: {
            decrement: referralAmountToDeduct,
          },
          cart: {
            delete: true,
          },
        },
      }),
    ]);
    console.log("Transaction successful, order created:", order);

    await sendNotification({
      userId: user.id,
      title: "Order Placed",
      message: `Your order #${order.id} has been placed successfully. Thank you for shopping with us.`,
      type: "purchase",
    });
    return order;
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
}

export {
  addToCart,
  removeFromCart,
  updatePickupStation,
  updateQuantity,
  graduateCartToOrder,
};
