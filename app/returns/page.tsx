"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeftRight,
  Calendar,
  AlertCircle,
  Truck,
  CreditCard,
} from "lucide-react";
import app from "@/constants/app";

const ReturnPolicyPage = () => {
  const policies = [
    {
      title: "30-Day Return Window",
      description:
        "You have 30 days from the date of delivery to return your item.",
      icon: <Calendar className="h-8 w-8 text-purple-600" />,
    },
    {
      title: "Eligible Items",
      description:
        "Most items are eligible for return. Exceptions include personalized items and perishable goods.",
      icon: <ArrowLeftRight className="h-8 w-8 text-purple-600" />,
    },
    {
      title: "Item Condition",
      description:
        "Items must be unused, unworn, and in the same condition that you received them with original packaging.",
      icon: <AlertCircle className="h-8 w-8 text-purple-600" />,
    },
    {
      title: "Return Shipping",
      description:
        "For eligible returns, we provide a free return shipping label. For non-eligible returns, shipping costs are the responsibility of the customer.",
      icon: <Truck className="h-8 w-8 text-purple-600" />,
    },
    {
      title: "Refund Process",
      description:
        "Once we receive and inspect the returned item, we'll process your refund. The money will be refunded to your original payment method within 5-10 business days.",
      icon: <CreditCard className="h-8 w-8 text-purple-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-purple-700">
              {app.name} Return Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-600 text-center text-balance">
              We want you to be completely satisfied with your purchase. If
              you're not happy with your order, we're here to help.
            </p>

            {policies.map((policy, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{policy.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700">
                        {policy.title}
                      </h3>
                      <p className="text-gray-600">{policy.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="bg-purple-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-purple-700">
                How to Initiate a Return
              </h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Log in to your {app.name} account</li>
                <li>
                  Go to your order history and select the item you wish to
                  return
                </li>
                <li>Click on "Return Item" and follow the prompts</li>
                <li>
                  Print the provided return label (if eligible for free return
                  shipping)
                </li>
                <li>Pack the item securely and attach the return label</li>
                <li>
                  Drop off the package at the pickup location where the item was
                  delivered
                </li>
              </ol>
            </div>

            <p className="text-sm text-gray-600 text-center">
              For any questions or concerns about our return policy, please
              contact our customer support team.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReturnPolicyPage;
