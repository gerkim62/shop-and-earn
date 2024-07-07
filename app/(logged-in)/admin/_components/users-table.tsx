// UsersTable.tsx (Client Component)
"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Bell } from "lucide-react";
import { User } from "@prisma/client";

import { Pagination as PaginationType, SearchTarget } from "../_types";
import { Pagination } from "@/components/small/pagination";
import { toast } from "sonner";
import { useLocalStorage } from "usehooks-ts";
import { SEARCH_TARGET_LOCALSTORAGE_KEY } from "../_constants";

export function UsersTable({
  initialUsers,
  pagination,
}: {
  initialUsers: User[];
  pagination: PaginationType;
}) {
  const [users] = useState(initialUsers);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationUserId, setNotificationUserId] = useState<number | null>(
    null
  );
  const [, setSearchTarget] = useLocalStorage<SearchTarget>(
    SEARCH_TARGET_LOCALSTORAGE_KEY,
    "users"
  );

  useEffect(() => {
    toast("UsersTable component mounted");
    setSearchTarget("users");
  }, [setSearchTarget]);

  const handleSendNotification = (userId: number, message: string) => {
    console.log(`Sending notification to user ${userId}: ${message}`);
    // In a real app, you'd make an API call to send the notification
    setNotificationMessage("");
    setNotificationUserId(null);
  };

  return (
    <>
      <Table>
        <TableCaption>A list of all users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Referral Code</TableHead>
            <TableHead>Balance</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.referralCode}</TableCell>
              <TableCell>${user.balance.toFixed(2)}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Bell className="w-4 h-4 mr-2" /> Notify
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Send Notification</DialogTitle>
                    </DialogHeader>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (notificationUserId !== null)
                          handleSendNotification(
                            notificationUserId,
                            notificationMessage
                          );
                      }}
                    >
                      <div className="grid gap-4 py-4">
                        <Textarea
                          value={notificationMessage}
                          onChange={(e) =>
                            setNotificationMessage(e.target.value)
                          }
                          placeholder="Notification message"
                        />
                      </div>
                      <Button
                        type="submit"
                        onClick={() => setNotificationUserId(user.id)}
                      >
                        Send Notification
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination {...pagination} currentPageIdentifier="users_page" />
    </>
  );
}
