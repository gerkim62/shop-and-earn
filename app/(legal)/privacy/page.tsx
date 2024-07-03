"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import app from "@/constants/app";

const PrivacyPolicyPage = () => {
  const [expandedSection, setExpandedSection] = useState<null | number>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const policies = [
    {
      title: "1. Information We Collect",
      content: `We collect personal information that you provide directly to us, such as your name, email address, postal address, phone number, and payment information when you register for an account, place an order, or participate in our referral program. We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, and pages visited.`,
    },
    {
      title: "2. How We Use Your Information",
      content: `We use your information to provide and improve our services, process your transactions, communicate with you, administer our referral program, and comply with legal obligations. This includes personalizing your experience, analyzing usage patterns, and sending promotional communications (subject to your preferences).`,
    },
    {
      title: "3. Information Sharing and Disclosure",
      content: `We may share your information with service providers who perform services on our behalf, such as payment processing and delivery services. We may also share information to comply with legal requirements, protect our rights, or in connection with a business transfer. We do not sell your personal information to third parties.`,
    },
    {
      title: "4. Data Security",
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
    },
    {
      title: "5. Your Rights and Choices",
      content: `Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. You can update your account information and communication preferences at any time. To exercise your rights, please contact us using the information provided at the end of this policy.`,
    },
    {
      title: "6. Cookies and Similar Technologies",
      content: `We use cookies and similar tracking technologies to collect information about your browsing activities. You can manage your cookie preferences through your browser settings, although disabling cookies may limit your ability to use some features of our service.`,
    },
    {
      title: "7. Third-Party Links",
      content: `Our service may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to read the privacy policies of any third-party sites you visit.`,
    },
    {
      title: "8. Children's Privacy",
      content: `Our service is not directed to children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us to have it removed.`,
    },
    {
      title: "9. International Data Transfers",
      content: `Your information may be transferred to and processed in countries other than your own. We will ensure that appropriate safeguards are in place to protect your personal information in accordance with this policy and applicable data protection laws.`,
    },
    {
      title: "10. Changes to This Policy",
      content: `We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-purple-700">
              {app.name} Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-600 text-center">
              Last updated: February 21, 2023
            </p>
            <p className="text-gray-600">
              At {app.name}, we are committed to protecting your privacy and
              ensuring you have a positive experience on our website. This
              policy outlines our practices concerning the collection, use, and
              disclosure of your information.
            </p>

            {policies.map((policy, index) => (
              <Card key={index} className="border border-purple-200">
                <CardHeader
                  className="cursor-pointer hover:bg-purple-50"
                  onClick={() => toggleSection(index)}
                >
                  <CardTitle className="text-lg font-semibold text-purple-700 flex justify-between items-center">
                    {policy.title}
                    {expandedSection === index ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </CardTitle>
                </CardHeader>
                {expandedSection === index && (
                  <CardContent>
                    <p className="text-gray-600">{policy.content}</p>
                  </CardContent>
                )}
              </Card>
            ))}

            <p className="text-sm text-gray-600 text-center mt-6">
              By using {app.name}, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
