import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ShieldCheck, Users, Star } from "lucide-react";
import app from "@/constants/app";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-purple-700">
              About Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 ">
                Welcome to {app.name}! We are dedicated to bringing you the best
                products at unbeatable prices while rewarding you for spreading
                the word.
              </p>
              <p className="text-lg text-gray-700">
                Our mission is to create a community of smart shoppers who earn
                rewards by referring their friends and family. We believe in the
                power of community and the joy of giving back.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-purple-700">
              Our Values
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Heart className="h-10 w-10 text-purple-600" />
              <div>
                <h3 className="font-semibold text-lg">Customer First</h3>
                <p className="text-gray-600">
                  We prioritize our customers in everything we do, ensuring they
                  have the best shopping experience.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ShieldCheck className="h-10 w-10 text-purple-600" />
              <div>
                <h3 className="font-semibold text-lg">Trust and Security</h3>
                <p className="text-gray-600">
                  We are committed to maintaining the highest standards of
                  security and privacy for our users.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Users className="h-10 w-10 text-purple-600" />
              <div>
                <h3 className="font-semibold text-lg">Community Building</h3>
                <p className="text-gray-600">
                  We foster a sense of community among our users, encouraging
                  them to share and grow together.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Star className="h-10 w-10 text-purple-600" />
              <div>
                <h3 className="font-semibold text-lg">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in all aspects of our business, from
                  customer service to product quality.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
