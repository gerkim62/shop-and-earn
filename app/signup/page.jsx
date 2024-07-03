"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Users, Coins, ShieldCheck, Star, Heart } from "lucide-react";
import app from "@/constants/app";
import Link from "@/components/small/link-with-loader";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const referralCode = "REFERRAL123";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
      // Here you would typically send the data to your backend
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* Signup Form */}
        <Card className="flex-grow w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-purple-700">
              Create your {app.name} Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="referralCode"
                  className="text-sm font-medium text-gray-700"
                >
                  Referral Code
                </Label>
                <Input
                  type="text"
                  id="referralCode"
                  name="referralCode"
                  value={referralCode}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                Sign Up and Start Earning!
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-purple-600 hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Referral Information */}
        <Card className="flex-grow hidden lg:flex flex-col justify-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-purple-700">
              Why Join {app.name}?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Gift className="h-10 w-10 text-purple-600" />
              <div>
                <h3 className="font-semibold text-lg">Earn Rewards</h3>
                <p className="text-gray-600">
                  Get cash bonuses for every friend you refer who signs up and
                  makes a purchase. The more friends you invite, the more you
                  earn!
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Coins className="h-10 w-10 text-purple-600" />
              <div>
                <h3 className="font-semibold text-lg">Exclusive Discounts</h3>
                <p className="text-gray-600">
                  Access special deals and discounts available only to our
                  referral program members. Save more on your favorite products
                  and services.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ShieldCheck className="h-10 w-10 text-purple-600" />
              <div>
                <h3 className="font-semibold text-lg">Secure and Reliable</h3>
                <p className="text-gray-600">
                  Our referral program is built on a secure platform, ensuring
                  your information and earnings are safe. Trust in our
                  commitment to your privacy and security.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Heart className="h-10 w-10 text-purple-600" />
              <div>
                <h3 className="font-semibold text-lg">Support a Cause</h3>
                <p className="text-gray-600">
                  Part of our referral program proceeds goes to support local
                  charities. Feel good about contributing to meaningful causes
                  while earning rewards.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignupForm;
