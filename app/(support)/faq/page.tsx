import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import rewards from "@/constants/rewards";
import app from "@/constants/app";

const FAQs = () => {
  const faqs = [
    {
      question: `What is ${app.name} all about?`,
      answer:
        "Our app offers a wide range of products at highly discounted prices. You can also earn rewards by referring friends to join and shop with us.",
    },
    {
      question: "How does the referral program work?",
      answer: `You can refer friends using your unique referral link. When each of your friends sign up, you earn KSH ${rewards.onSignup.referrer} and when they make their first purchase, you earn KSH ${rewards.onFirstPurchase.referrer}.`,
    },
    {
      question: "How can I redeem my rewards?",
      answer:
        "You can redeem your earned rewards during the checkout process. The rewards will be applied as a discount to your total purchase amount.",
    },
    {
      question: "Is my personal information safe?",
      answer:
        "Yes, we prioritize the security and privacy of our users. All your personal information is securely stored and protected.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "For Kenyan users, M-Pesa is supported. For international users, we accept Visa, Mastercard, and PayPal. More payment methods will be added soon.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-purple-700">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <button className="flex items-center justify-between w-full text-left text-lg font-semibold text-purple-700">
                  {faq.question}
                  <ChevronDown className="h-6 w-6 text-purple-600" />
                </button>
                <p className="text-gray-600 ml-6">{faq.answer}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQs;
