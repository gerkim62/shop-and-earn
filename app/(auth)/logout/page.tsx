"use client";

import React from "react";
import { LogOut, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutPage = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "unauthenticated") router.replace("/login");
  const handleBack = () => {
    console.log("Go back");
    router.back();
  };

  const handleLogout = async () => {
    console.log("Logging out...");
    await signOut({
      redirect: false,
    });

    router.replace("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
      <Card className="w-[350px] text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Logout</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-6">
            <LogOut className="w-20 h-20 text-blue-500 animate-bounce" />
            <p className="text-lg">Are you sure you want to log out?</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between mt-4">
          <Button variant="outline" onClick={handleBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button variant="destructive" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Confirm Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LogoutPage;
