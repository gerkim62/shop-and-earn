"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, CheckCircle, XCircle, Link, ShoppingCart } from "lucide-react";
import app from "@/constants/app";

const ReferralsPage = () => {
  const [copied, setCopied] = useState(false);

  // Mock data - replace with actual data from your backend
  const referralLink = "https://example.com/refer/USER123";
  const totalInvited = 15;
  const totalEarned = 5000; // in KSH
  const invitedUsers = [
    { id: 1, name: "John Doe", signedUp: true, purchased: true, signUpDate: "2024-03-01", purchaseDate: "2024-03-05", earnedFromSignUp: 100, earnedFromPurchase: 500 },
    { id: 2, name: "Jane Smith", signedUp: true, purchased: false, signUpDate: "2024-03-05", purchaseDate: null, earnedFromSignUp: 100, earnedFromPurchase: 0 },
    { id: 3, name: "Alice Johnson", signedUp: true, purchased: true, signUpDate: "2024-03-10", purchaseDate: "2024-03-12", earnedFromSignUp: 100, earnedFromPurchase: 500 },
    // Add more users as needed
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-purple-700">
              Your {app.name} Referrals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-purple-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-purple-700">How Referrals Work</h3>
              <p className="text-sm text-purple-600">
                It's easy to earn with our referral program:
              </p>
              <ul className="list-disc list-inside text-sm text-purple-600 mt-2 space-y-1">
                <li>Share your unique referral link with friends</li>
                <li>Earn KSH100 when a friend signs up</li>
                <li>Earn KSH500 when they make their first purchase</li>
                <li>There's no limit - refer as many friends as you want!</li>
              </ul>
              <p className="text-sm text-purple-600 mt-2 font-semibold">
                Start sharing and watch your earnings grow!
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Your Referral Link</h3>
              <div className="flex space-x-2">
                <Input
                  value={referralLink}
                  readOnly
                  className="flex-grow"
                />
                <Button onClick={copyToClipboard} className="w-24">
                  {copied ? <CheckCircle className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">Total Invited</h3>
                  <p className="text-3xl font-bold text-purple-600">{totalInvited}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">Total Earned</h3>
                  <p className="text-3xl font-bold text-purple-600">KSH {totalEarned.toLocaleString()}</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Invited Friends</h3>
              <div className="space-y-2">
                {invitedUsers.map((user) => (
                  <Card key={user.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-semibold">{user.name}</p>
                        <div className="flex space-x-2">
                          {user.signedUp && <Link className="h-5 w-5 text-green-500" />}
                          {user.purchased && <ShoppingCart className="h-5 w-5 text-green-500" />}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Signed up: {user.signUpDate}</p>
                      {user.purchaseDate && (
                        <p className="text-sm text-gray-600">First purchase: {user.purchaseDate}</p>
                      )}
                      <p className="text-sm font-semibold text-purple-600 mt-2">
                        Earned: KSH {(user.earnedFromSignUp + user.earnedFromPurchase).toLocaleString()}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReferralsPage;