"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import app from "@/constants/app";

const TermsOfServicePage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const terms = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing or using ${app.name}, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.`,
    },
    {
      title: "2. Use of Service",
      content: `You must be at least 18 years old to use ${app.name}. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.`,
    },
    {
      title: "3. Product Information",
      content: `We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free. In the event of a pricing error, we reserve the right to cancel any orders placed for products listed at the incorrect price.`,
    },
    {
      title: "4. Ordering and Payment",
      content: `When you place an order, you offer to purchase the product at the advertised price. We reserve the right to accept or decline your offer for any reason. Payment must be made at the time of ordering.`,
    },
    {
      title: "5. Shipping and Delivery",
      content: `Shipping costs and estimated delivery times are provided at checkout. We are not responsible for delays outside our control, such as customs delays or postal service issues.`,
    },
    {
      title: "6. Returns and Refunds",
      content: `Please refer to our separate Return Policy for detailed information on returns and refunds. Generally, items may be returned within 30 days of receipt if they are in original condition.`,
    },
    {
      title: "7. Referral Program",
      content: `Our referral program allows you to earn rewards for referring new customers. Referral rewards are subject to verification and may be withheld or revoked if we suspect fraud or violation of these terms. We reserve the right to modify or terminate the referral program at any time.`,
    },
    {
      title: "8. Intellectual Property",
      content: `All content on ${app.name}, including text, graphics, logos, and software, is the property of ${app.name} or its content suppliers and is protected by copyright laws. You may not use our intellectual property without our express written consent.`,
    },
    {
      title: "9. User Conduct",
      content: `You agree not to use ${app.name} for any unlawful purpose or in any way that could damage, disable, overburden, or impair our service. This includes attempting to gain unauthorized access to any part of our service, other accounts, or any of our computer systems or networks.`,
    },
    {
      title: "10. Limitation of Liability",
      content: `${app.name} shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use our service.`,
    },
    {
      title: "11. Governing Law",
      content: `These terms shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions.`,
    },
    {
      title: "12. Changes to Terms",
      content: `We reserve the right to modify these terms at any time. We will notify users of any significant changes via email or through our website. Your continued use of ${app.name} after changes constitutes acceptance of the new terms.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-purple-700">
              {app.name} Terms of Service
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-600 text-center">
              Last updated: April 15, 2024
            </p>
            <p className="text-gray-600">
              Please read these Terms of Service carefully before using{" "}
              {app.name}. By using our service, you agree to be bound by these
              terms.
            </p>

            {terms.map((term, index) => (
              <Card key={index} className="border border-purple-200">
                <CardHeader
                  className="cursor-pointer hover:bg-purple-50"
                  onClick={() => toggleSection(index)}
                >
                  <CardTitle className="text-lg font-semibold text-purple-700 flex justify-between items-center">
                    {term.title}
                    {expandedSection === index ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </CardTitle>
                </CardHeader>
                {expandedSection === index && (
                  <CardContent>
                    <p className="text-gray-600">{term.content}</p>
                  </CardContent>
                )}
              </Card>
            ))}

            <p className="text-sm text-gray-600 text-center mt-6">
              By using {app.name}, you acknowledge that you have read and
              understood these Terms of Service and agree to be bound by them.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
