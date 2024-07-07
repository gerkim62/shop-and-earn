import prisma from "@/lib/prisma";
import { MAX_ITEMS_PER_PAGE } from "../_constants";

export const fetchTotalCounts = async () => {
  const [totalOrders, totalProducts, totalUsers] = await Promise.all([
    prisma.order.count(),
    prisma.product.count(),
    prisma.user.count(),
  ]);

  return { totalOrders, totalProducts, totalUsers };
};

export const fetchOrders = async (page: number) => {
  return prisma.order.findMany({
    take: MAX_ITEMS_PER_PAGE,
    skip: (page - 1) * MAX_ITEMS_PER_PAGE,
    include: {
      user: {
        select: {
          fullName: true,
        },
      },
    },
  });
};

export const fetchProducts = async (page: number, searchQuery: string) => {
  return prisma.product.findMany({
    take: MAX_ITEMS_PER_PAGE,
    skip: (page - 1) * MAX_ITEMS_PER_PAGE,
    where: {
      OR: [
        { name: { contains: searchQuery, mode: "insensitive" } },
        { description: { contains: searchQuery, mode: "insensitive" } },
      ],
    },
  });
};

export const fetchUsers = async (page: number, searchQuery: string) => {
  return prisma.user.findMany({
    take: MAX_ITEMS_PER_PAGE,
    skip: (page - 1) * MAX_ITEMS_PER_PAGE,
    where: {
      fullName: { contains: searchQuery, mode: "insensitive" },
    },
  });
};
