"use server";

import prisma from "@/lib/prisma";
import { NotficationType } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function makeAdmin(formData: FormData) {
  try {
    const userId = Number(formData.get("userId"));
    await prisma.user.update({
      where: { id: userId },
      data: { role: "ADMIN" },
    });

    revalidatePath("/admin/users");
  } catch (error) {}
}

export async function revokeAdmin(formData: FormData) {
  try {
    const userId = Number(formData.get("userId"));
    await prisma.user.update({
      where: { id: userId },
      data: { role: "USER" },
    });
    revalidatePath("/admin/users");
  } catch (error) {}
}

export async function makeEditor(formData: FormData) {
  try {
    const userId = Number(formData.get("userId"));
    await prisma.user.update({
      where: { id: userId },
      data: { role: "EDITOR" },
    });
    revalidatePath("/admin/users");
  } catch (error) {}
}

export async function sendNotification({
  message,
  type,
  userId,
  title,
}: {
  message: string;
  type: NotficationType;
  userId: number;
  title: string;
}) {
  const notification = await prisma.notification.create({
    data: {
      message,
      type,
      userId,
      title,
    },
  });

  return notification;
}
