"use server";

import authOptions from "@/auth/options";
import prisma from "@/lib/prisma";
import ServerActionReturnType from "@/types/server-action";
import SignupFormSchema from "@/validation/forms/signup";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function updateProfile(
  data: {
    fullName: string;
  }
): Promise<ServerActionReturnType<User>> {
  const email = (await getServerSession(authOptions))?.user.email;

  if (!email) {
    redirect("/login");
  }

  const validationResult = SignupFormSchema.safeParse(data);

  if (!validationResult.success) {
    return {
      success: false,
      message: validationResult.error.errors[0]?.message ?? "Invalid data!",
      data: validationResult.error,
    };
  }

  if (!validationResult.data.name) {
    return {
      success: false,
      message: "Name is required!",
      data: null,
    };
  }

  const newData = {
    fullName: validationResult.data.name,
  };

  const updated = await prisma.user.update({
    where: {
      email,
    },
    data: {
      ...newData,
    },
  });

  return {
    success: true,
    message: "Profile updated successfully",
    data: updated,
  };
}
