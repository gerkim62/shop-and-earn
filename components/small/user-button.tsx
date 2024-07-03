import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { User, Gift, LogOut, Bell, ShoppingCart } from "lucide-react";

export default function UserButton() {
  // Mock user data - replace with actual user data in a real application
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/placeholder-user.jpg",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="p-2 inline-flex items-center text-xs rounded-full bg-purple-500"
        >
          <Avatar className="h-10 w-10 ">
            <AvatarImage src={user.avatar} alt={`${user.name}'s avatar`} />
            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 bg-purple-50">
        <DropdownMenuLabel className="flex flex-col space-y-1 p-4">
          <span className="font-medium text-purple-900">{user.name}</span>
          <span className="text-sm text-purple-600">{user.email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-purple-200" />
        <DropdownMenuItem className="hover:bg-purple-100">
          <Link
            href="#"
            className="flex items-center gap-2 text-purple-700"
            prefetch={false}
          >
            <User className="h-4 w-4" />
            <span>My Account</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-purple-100">
          <Link
            href="#"
            className="flex items-center gap-2 text-purple-700"
            prefetch={false}
          >
            <Gift className="h-4 w-4" />
            <span>Referrals</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-purple-200" />
        <DropdownMenuItem className="hover:bg-purple-100">
          <Link
            href="#"
            className="flex items-center gap-2 text-purple-700"
            prefetch={false}
          >
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-purple-100">
          <Link
            href="#"
            className="flex items-center gap-2 text-purple-700"
            prefetch={false}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>My Cart</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-purple-200" />
        <DropdownMenuItem className="hover:bg-purple-100">
          <Link
            href="#"
            className="flex items-center gap-2 text-purple-700"
            prefetch={false}
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}