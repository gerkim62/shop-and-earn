"use server";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "./options";
import { redirect } from "next/navigation";
import { Cart, CartItem, Notification, Order, User } from "@prisma/client";

export type UserWithRelations = User & {
  orders: Order[];
  referredUsers: {
    id: number;
    createdAt: Date;
    fullName: string;
    email: string;
    orders: { id: number; createdAt: Date }[];
  }[];
  notifications: Notification[];
  cart:
    | (Cart & {
        items: CartItem[];
      })
    | null;
};

async function getUserFromSession(): Promise<UserWithRelations | null> {
  const email = (await getServerSession(authOptions))?.user.email;

  if (!email) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      orders: true,
      referredUsers: {
        select: {
          id: true,
          email: true,
          fullName: true,
          createdAt: true,
          orders: {
            select: {
              id: true,
              createdAt: true,
            },
          },
        },
      },
      notifications: true,
      cart: {
        include: {
          items: true,
        },
      },
    },
  });

  return user;
}

export async function getCurrentUser(): Promise<UserWithRelations | null> {
  return await getUserFromSession();
}

export async function getCurrentUserOrRedirect(): Promise<UserWithRelations> {
  const user = await getUserFromSession();

  if (!user) {
    redirect("/login");
  }

  return user!;
}
