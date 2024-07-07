import { UserWithRelations } from "@/auth/user";
import Link from "@/components/small/link-with-loader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  Gift,
  LayoutDashboard,
  LogOut,
  ShoppingCart,
  User,
} from "lucide-react";

type UserButtonProps = {
  user: UserWithRelations;
};
export default function UserButton({ user }: UserButtonProps) {
  // Mock user data - replace with actual user data in a real application

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="p-2 inline-flex items-center text-xs rounded-full bg-purple-500"
        >
          <Avatar className="h-10 w-10 ">
            {/* <AvatarImage src={user.avatar} alt={`${user.fullName}'s avatar`} /> */}
            <AvatarFallback>
              {user.fullName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 bg-purple-50">
        <DropdownMenuLabel className="flex flex-col space-y-1 p-4">
          <span className="font-medium text-purple-900">{user.fullName}</span>
          <span className="text-sm text-purple-600">{user.email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-purple-200" />
        <DropdownMenuItem asChild className="hover:bg-purple-100">
          <Link
            href="/account"
            className="flex items-center gap-2 text-purple-700"
            prefetch={false}
          >
            <User className="h-4 w-4" />
            <span>My Account</span>
          </Link>
        </DropdownMenuItem>
        {user.role !== "USER" && (
          <DropdownMenuItem>
            <Link
              hidden={user.role !== "ADMIN"}
              href="/admin"
              className="flex items-center gap-2 text-purple-700"
              prefetch={false}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Admin Dashboard</span>
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem asChild className="hover:bg-purple-100">
          <Link
            href="/referrals"
            className="flex items-center gap-2 text-purple-700"
            prefetch={false}
          >
            <Gift className="h-4 w-4" />
            <span>Referrals</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-purple-200" />
        <DropdownMenuItem asChild className="hover:bg-purple-100">
          <Link
            href="/notifications"
            className="flex items-center gap-2 text-purple-700"
            prefetch={false}
          >
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="hover:bg-purple-100">
          <Link
            href="/checkout"
            className="flex items-center gap-2 text-purple-700"
            prefetch={false}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>My Cart</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-purple-200" />
        <DropdownMenuItem asChild className="hover:bg-purple-100">
          <Link
            href="/logout"
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
