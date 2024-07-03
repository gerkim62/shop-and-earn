import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Users, ShoppingBag, Gift } from "lucide-react";
import Link from "@/components/small/link-with-loader";
import app from "@/constants/app";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-8 px-4 text-center">
        <h1 className="text-4xl font-bold mb-6 text-purple-800">
          Earn While You Shop!
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Refer friends, earn rewards, and shop amazing discounts all in one
          place.
        </p>
        <Button
          size="lg"
          asChild
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <Link href="/signup">Sign Up Now</Link>
        </Button>
        <Button asChild variant={"link"}>
          <Link href={"/login"}>Log In</Link>
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-4 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-purple-800">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={<CreditCard className="h-12 w-12 text-purple-600" />}
            title="Earn Real Money"
            description="Get cash rewards for every friend you refer"
          />
          <FeatureCard
            icon={<Users className="h-12 w-12 text-purple-600" />}
            title="Easy Referrals"
            description="Simple process to invite friends and track rewards"
          />
          <FeatureCard
            icon={<ShoppingBag className="h-12 w-12 text-purple-600" />}
            title="Huge Discounts"
            description="Access to products at unbeatable prices"
          />
          <FeatureCard
            icon={<Gift className="h-12 w-12 text-purple-600" />}
            title="Redeem Anytime"
            description="Use your earnings on any purchase, any time"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center bg-purple-100">
        <h2 className="text-3xl font-bold mb-6 text-purple-800">
          Ready to Start Earning?
        </h2>
        <p className="text-xl mb-8 text-gray-600">
          Join thousands of happy users who are earning and saving every day.
        </p>
        <Button
          size="lg"
          asChild
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <Link href="/signup">Sign Up Now</Link>
        </Button>
      </section>

      {/* Testimonial Section */}
      <section className="py-4 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-purple-800">
          What Our Users Say
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-gray-600 italic">
                "How did I not know of this app earlier. I have earned more than
                KSH 10,000 so far thanks to {app.name}"
              </p>
              <p className="mt-4 font-semibold">- Sarah M., Nairobi</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex flex-col items-center text-center">
        {icon}
        <span className="mt-4 text-xl">{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-center text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

export default LandingPage;
