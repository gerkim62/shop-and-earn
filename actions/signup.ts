"use server";

import app from "@/constants/app";
import rewards from "@/constants/rewards";
import prisma from "@/lib/prisma";
import ServerActionReturnType from "@/types/server-action";
import SignupFormSchema from "@/validation/forms/signup";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export default async function signup(
  data: z.input<typeof SignupFormSchema>
): Promise<ServerActionReturnType<User>> {
  const validatedData = SignupFormSchema.safeParse(data);

  console.log("validatedData", validatedData);

  if (!validatedData.success) {
    return {
      success: false,
      message: validatedData.error.errors[0]?.message ?? "Invalid data!",
      data: validatedData.error,
    };
  }

  const exists = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (exists) {
    return {
      success: false,
      message: "User with this email already exists!",
      data: null,
    };
  }

  const referrer = await prisma.user.findUnique({
    where: {
      referralCode: Number(data.referralCode),
    },
  });

  try {
    const user = await prisma.$transaction(async (prisma) => {
      const createdUser = await prisma.user.create({
        data: {
          email: data.email,
          password: data.password,
          fullName: data.name,
          balance: rewards.onSignup.user,
          notifications: {
            create: {
              title: `Welcome to ${app.name}`,
              message: `You have received a KSH ${rewards.onSignup.user} welcome bonus!`,
              type: "reward",
            },
          },
        },
      });

      if (referrer) {
        await prisma.user.update({
          where: {
            id: referrer.id,
          },
          data: {
            balance: {
              increment: rewards.onSignup.referrer,
            },
            notifications: {
              create: {
                title: `${data.name} has signed up!`,
                message: `You have received a KSH ${rewards.onSignup.referrer} referral bonus!`,
                type: "reward",
              },
            },
            referredUsers: {
              connect: {
                id: createdUser.id,
              },
            },
          },
        });
      }

      return createdUser;
    });

    revalidatePath("/")
    return {
      success: true,
      message: "Account created successfully!",
      data: user,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to create account!",
      data: null,
    };
  }
}
