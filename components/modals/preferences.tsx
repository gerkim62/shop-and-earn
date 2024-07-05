"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RECEIVE_NOTIFICATIONS_ABOUT_OTHERS_LOCALSTORAGE_KEY } from "@/constants/storage";
import { Bell, UserCog } from "lucide-react";
import React from "react";
import { useLocalStorage } from "usehooks-ts";

type PreferencesModalProps = {
  children: React.ReactNode;
};
const PreferencesModal = ({ children }: PreferencesModalProps) => {
  const [receiveNotifications, setReceiveNotifications] = useLocalStorage(
    RECEIVE_NOTIFICATIONS_ABOUT_OTHERS_LOCALSTORAGE_KEY,
    true
  );
  const [allowOwnNotifications, setAllowOwnNotifications] = useLocalStorage(
    "send",
    true
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-[90%] bg-white rounded-lg shadow-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-black">
            Notification Settings
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Configure your notification preferences here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-purple-500" />
            <div className="flex-grow">
              <Label
                htmlFor="receive-notifications"
                className="text-gray-700 font-medium"
              >
                Receive notifications about other users
              </Label>
              <p className="text-sm text-gray-500">
                Get notified when other users purchase, withdraw, or earn rewards.
              </p>
            </div>
            <Switch
              id="receive-notifications"
              checked={receiveNotifications}
              onCheckedChange={setReceiveNotifications}
              className="data-[state=checked]:bg-purple-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <UserCog className="h-6 w-6 text-purple-500" />
            <div className="flex-grow">
              <Label
                htmlFor="allow-own-notifications"
                className="text-gray-700 font-medium"
              >
                Allow notifications about your activity
              </Label>
              <p className="text-sm text-gray-500">
                Let others be notified about your purchases, withdrawals, and
                invitations.
              </p>
            </div>
            <Switch
              id="allow-own-notifications"
              checked={allowOwnNotifications}
              onCheckedChange={setAllowOwnNotifications}
              className="data-[state=checked]:bg-purple-500"
            />
          </div>
        </div>
        <DialogTrigger asChild>
          <Button className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-md shadow-sm">
            Close
          </Button>
        </DialogTrigger>
      </DialogContent>
    </Dialog>
  );
};

export default PreferencesModal;
