import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, ShoppingCart, Package } from "lucide-react";
import prisma from "@/lib/prisma";
import { getCurrentUserOrRedirect } from "@/auth/user";
import Denied from "./_components/denied";

type DashboardCardProps = {
  title: string;
  total: number;
  label: string;
  icon: React.ElementType;
  link: string;
};
const DashboardCard = ({
  title,
  total,
  label,
  icon: Icon,
  link,
}: DashboardCardProps) => (
  <Card className="bg-white rounded-xl shadow-md flex flex-col h-full">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-xl font-semibold text-purple-800">
        {title}
      </CardTitle>
      <Icon className="h-8 w-8 text-purple-300" />
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="text-sm font-medium text-purple-600 mb-1">{label}</div>
      <div className="text-3xl font-bold text-purple-800">{total}</div>
    </CardContent>
    <CardFooter className="pt-4">
      <a
        href={link}
        className="w-full text-center text-sm text-purple-700 bg-purple-100 hover:bg-purple-200 px-4 py-2 rounded-full shadow transition-colors duration-200"
      >
        View {title} →
      </a>
    </CardFooter>
  </Card>
);

const AdminDashboard = async () => {
  const user = getCurrentUserOrRedirect();
  if ((await user).role === "USER") {
    return <Denied />;
  }
  // promises
  const totalUsersPromise = prisma.user.count();
  const totalOrdersPromise = prisma.order.count();
  const totalProductsPromise = prisma.product.count();

  // await
  const [totalUsers, totalOrders, totalProducts] = await Promise.all([
    totalUsersPromise,
    totalOrdersPromise,
    totalProductsPromise,
  ]);
  return (
    <div className="min-h-[80vh] bg-purple-50 flex  justify-center p-4">
      <div className="max-w-7xl w-full space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 text-center mb-0 mt-4">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard
            title="Users"
            total={totalUsers}
            label="Total Users"
            icon={Users}
            link="/admin/users"
          />
          <DashboardCard
            title="Orders"
            total={totalOrders}
            label="Total Orders"
            icon={ShoppingCart}
            link="/admin/orders"
          />
          <DashboardCard
            title="Products"
            total={totalProducts}
            label="Total Products"
            icon={Package}
            link="/products"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
