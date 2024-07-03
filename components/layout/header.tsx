import { Bell, Gift, ShoppingCart, User } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import app from "@/constants/app";
import Link from "../small/link-with-loader";
import UserButton from "../small/user-button";

const Header: FC = () => {
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
            <Button
              asChild
              variant={"ghost"}
              type="button"
              className="p-2 inline-flex items-center text-xs  "
            >
              <Link href={"/notifications"}>
                {" "}
                <Bell className="w-6 h-6" />
                <span className="hidden sm:inline ml-2">Notifications</span>
              </Link>
            </Button>

            <Button
              asChild
              variant={"ghost"}
              type="button"
              className="p-2 inline-flex items-center text-xs  "
            >
              <Link href={"/checkout"}>
                <ShoppingCart className=" w-6 h-6" />
                <span className="hidden sm:inline ml-2">Cart</span>
              </Link>
            </Button>

            {/* <Button
              variant={"outline"}
              type="button"
              className="p-2 inline-flex items-center text-xs  border rounded-full"
            >
              <User className="w-6 h-6" />
            </Button> */}
            <UserButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
