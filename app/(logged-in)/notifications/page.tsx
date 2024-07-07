import { getCurrentUserOrRedirect } from "@/auth/user";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import {
  Bell,
  CreditCard,
  Gift,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

const NotificationsPage = async () => {
  const user = await getCurrentUserOrRedirect();

  const notificationsPromise = user.notifications
    .reverse()
    .map((notification) => ({
      id: notification.id,
      type: notification.type,
      message: notification.message,
      time: notification.createdAt.toLocaleDateString(),
      title: notification.title,
    }));

  const updatedPromise = await prisma.notification.updateMany({
    where: {
      user: {
        email: user.email,
      },
    },
    data: {
      read: true,
    },
  });

  const [notifications, updated] = await Promise.all([
    notificationsPromise,
    updatedPromise,
  ]);

  console.log(updated);

  const getIcon = (
    type: "reward" | "purchase" | "sale" | "wishlist" | "review"
  ) => {
    switch (type) {
      case "reward":
        return <Gift className="h-6 w-6 text-green-500" />;
      case "purchase":
        return <ShoppingCart className="h-6 w-6 text-blue-500" />;
      case "sale":
        return <CreditCard className="h-6 w-6 text-purple-500" />;
      case "wishlist":
        return <Heart className="h-6 w-6 text-red-500" />;
      case "review":
        return <Star className="h-6 w-6 text-yellow-500" />;
      default:
        return <Bell className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-purple-700 flex items-center justify-center">
            <Bell className="mr-2 h-6 w-6" />
            Your Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          {notifications.length > 0 ? (
            <ul className="space-y-4">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className="bg-white rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-100"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      {getIcon(notification.type)}
                    </div>
                    <div className="ml-3 flex-1">
                      <h2
                        className="mb-2 text-lg font-semibold text-gray-900
                      
                      "
                      >
                        {notification.title}
                      </h2>
                      <p className="text-sm font-medium text-gray-900">
                        {notification.message}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No new notifications</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationsPage;
