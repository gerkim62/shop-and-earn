"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User, Gift, ShoppingBag, Copy, CheckCircle } from "lucide-react";
import WithdrawalModal from "@/components/modals/withdrawal";
import CopyButton from "@/components/small/copy-button";

const MyAccountPage = () => {
  const [copiedReferralCode, setCopiedReferralCode] = useState(false);

  // Mock data
  const user = {
    name: "Jane Doe",
    email: "jane@example.com",
    referralCode: "JANE2023",
    referralCount: 8,
    referralTarget: 10,
    earnedRewards: 1600,
  };

  const referrals = [
    { id: 1, name: "John Smith", date: "2023-06-15", status: "Completed" },
    { id: 2, name: "Alice Johnson", date: "2023-06-20", status: "Pending" },
    // Add more referrals as needed
  ];

  const orders = [
    { id: "ORD001", date: "2023-07-01", total: 2500, status: "Delivered" },
    { id: "ORD002", date: "2023-07-15", total: 1800, status: "Processing" },
    // Add more orders as needed
  ];

  const copyReferralCode = () => {
    navigator.clipboard.writeText(user.referralCode);
    setCopiedReferralCode(true);
    setTimeout(() => setCopiedReferralCode(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-purple-800">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2" />
              Account Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              <Avatar className="h-16 w-16 mr-4">
                <AvatarImage src="/api/placeholder/120/120" alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="mr-2" />
              Referral Program
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Your Referral Link:</p>
            <div className="flex mb-4 ">
              <input
                type="text"
                value={user.referralCode}
                readOnly
                className="flex-grow  w-32  border rounded-l-md px-2 "
              />
              <CopyButton
                dontNormalize
                link="https://example.com/referral?code=JANE2023"
                className="rounded-l-none "
              ></CopyButton>
            </div>
            <p className="mb-2">Referral Progress:</p>
            <Progress
              value={(user.referralCount / user.referralTarget) * 100}
              className="mb-2"
            />
            <p className="text-sm text-gray-600">
              {user.referralCount} / {user.referralTarget} referrals
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShoppingBag className="mr-2" />
              Rewards Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-3xl font-bold text-green-600 mb-2">
              {user.earnedRewards} KSH
            </h3>
            <p className="text-gray-600 mb-4">
              Available to use on your next purchase
            </p>
            <WithdrawalModal currentBalance={user.earnedRewards}>
              <Button className="w-full">Use Rewards</Button>
            </WithdrawalModal>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="referrals" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="referrals">Referrals</TabsTrigger>
          <TabsTrigger value="orders">Order History</TabsTrigger>
        </TabsList>
        <TabsContent value="referrals">
          <Card>
            <CardHeader>
              <CardTitle>Your Referrals</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {referrals.map((referral) => (
                    <TableRow key={referral.id}>
                      <TableCell>{referral.name}</TableCell>
                      <TableCell>{referral.date}</TableCell>
                      <TableCell>{referral.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.total} KSH</TableCell>
                      <TableCell>{order.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyAccountPage;
