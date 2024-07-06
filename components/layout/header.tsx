"use client";

import app from "@/constants/app";
import { Bell, ShoppingCart, LogIn, Loader2 } from "lucide-react";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Link from "../small/link-with-loader";
import UserButton from "../small/user-button";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { getCurrentUser, type UserWithRelations } from "@/auth/user";
import { usePathname } from "next/navigation";
import { useCart } from "../context/cart";

const Header: FC = () => {
  const { status } = useSession();
  const pathname = usePathname();

  const isAuthenticated = status === "authenticated";
  const [gettingUser, setGettingUser] = useState(false);

  const [user, setUser] = useState<UserWithRelations | null>(null);
  const { cartProductIds, setCartProductIds } = useCart();
  const cartItemsCount = cartProductIds.length;
  const newNotificationsCount =
    user?.notifications.filter((n) => !n.read).length || 0;

  useEffect(() => {
    (async () => {
      if (status === "unauthenticated") setUser(null);
      else {
        setGettingUser(true);
        const user = await getCurrentUser().catch(() => null);
        setUser(user);
        setGettingUser(false);
        if (user) {
          setCartProductIds(user.cart?.items.map((c) => c.productId) ?? []);
        }
      }
    })();
  }, [status, pathname, setCartProductIds]);

  return (
    <header className="antialiased border-b">
      <nav className="bg-white border-gray-200 lg:px-6 py-2.5 dark:bg-gray-800 px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center ">
            <button
              id="toggleSidebar"
              aria-expanded="true"
              aria-controls="sidebar"
              className="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            ></button>
            <Link href="/" className="flex mr-4 items-center">
              <Image
                src="/logo.jpeg"
                className="mr-3 h-10 w-10 rounded-full"
                alt="Logo"
                width={40}
                height={40}
              />
              <span className="self-center sm:text-2xl text-xl font-semibold whitespace-nowrap dark:text-white">
                {app.name}
              </span>
            </Link>
          </div>
          <div className="flex items-center lg:order-2 sm:gap-4 gap-2">
            {isAuthenticated ? (
              <>
                <Button
                  asChild
                  variant={"ghost"}
                  type="button"
                  className="p-2 inline-flex items-center text-xs relative"
                >
                  <Link href={"/notifications"}>
                    <Bell className="w-6 h-6" />
                    <span className="hidden sm:inline ml-2">Notifications</span>
                    {newNotificationsCount > 0 && (
                      <div className="absolute -top-1 -right-0 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center text-white">
                        {newNotificationsCount > 9
                          ? "9+"
                          : newNotificationsCount}
                      </div>
                    )}
                  </Link>
                </Button>

                <Button
                  asChild
                  variant={"ghost"}
                  type="button"
                  className="p-2 inline-flex items-center text-xs relative"
                >
                  <Link href={"/checkout"}>
                    <ShoppingCart className="w-6 h-6" />
                    <span className="hidden sm:inline ml-2">Cart</span>
                    {cartItemsCount > 0 && (
                      <div className="absolute -top-1 -right-0 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center text-white">
                        {cartItemsCount > 9 ? "9+" : cartItemsCount}
                      </div>
                    )}
                  </Link>
                </Button>

                {gettingUser ? (
                  <UserLoading />
                ) : user ? (
                  <UserButton user={user} />
                ) : (
                  <UserLoading />
                )}
              </>
            ) : (
              <Button
                asChild
                variant={"ghost"}
                type="button"
                className="p-2 inline-flex items-center text-xs"
              >
                <Link href={"/login"}>
                  <LogIn className="w-6 h-6" />
                  <span className="hidden sm:inline ml-2">Login</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

function UserLoading() {
  return (
    <Link href={"/account"} className="flex items-center">
      <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse mr-0 flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-gray-400 animate-spin" />
      </div>
    </Link>
  );
}
