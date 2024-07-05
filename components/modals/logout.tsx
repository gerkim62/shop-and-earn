"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Home, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutModal = ({ children }: { children: React.ReactNode }) => {
  const handleLogout = () => {
    signOut();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]max-w-[90%] bg-white rounded-xl shadow-md text-center">
        <DialogHeader>
          <div className="relative w-24 h-24 mx-auto">
            <LogOut className="w-full h-full text-purple-300" />
            <span className="absolute bottom-0 right-0 text-3xl">👋</span>
          </div>
          <DialogTitle className="text-2xl font-bold text-purple-800 mt-4">
            See You Soon!
          </DialogTitle>
        </DialogHeader>
        <div className="text-lg text-purple-600 my-4">
          Are you sure you want to log out?
        </div>
        <DialogFooter className="flex justify-between mt-4">
          <DialogClose>
            <Button
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50 hover:text-purple-800 rounded-full transition-all duration-200 flex items-center px-6 py-3"
            >
              <Home className="w-5 h-5 mr-2" />
              Stay
            </Button>
          </DialogClose>
          <Button
            onClick={handleLogout}
            className="bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-full shadow transition-all duration-200 flex items-center px-6 py-3"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout 👋
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutModal;
