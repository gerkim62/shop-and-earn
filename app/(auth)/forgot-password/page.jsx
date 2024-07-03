"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to initiate the password reset process
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-purple-700">Forgot Password</CardTitle>
        </CardHeader>
        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                Reset Password
              </Button>
            </form>
          ) : (
            <Alert className="bg-green-100 border-green-400 text-green-700">
              <AlertDescription>
                If an account exists for {email}, you will receive password reset instructions shortly.
              </AlertDescription>
            </Alert>
          )}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Remember your password? <a href="/login" className="text-purple-600 hover:underline">Log in</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;