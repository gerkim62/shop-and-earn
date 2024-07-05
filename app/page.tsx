import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Users, ShoppingBag, Gift } from "lucide-react";
import Link from "@/components/small/link-with-loader";
import app from "@/constants/app";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getCurrentUser } from "@/auth/user";

const testimonials = [
  {
    quote:
      "How did I not know of this app earlier. I have earned more than KSH 10,000 so far thanks to this app!",
    author: "Sarah M., Nairobi",
  },
  {
    quote:
      "This app has revolutionized how I manage my finances. Highly recommended!",
    author: "John D., Mombasa",
  },
  {
    quote:
      "Easy to use and incredibly helpful. It's made a real difference in my life.",
    author: "Alice K., Kisumu",
  },
];

const LandingPage = async () => {
  const user = await getCurrentUser();
  return (
    <div className="min-h-screen bg-purple-50 ">
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
          <Link href={user ? "/products" : "/signup"}>
            {user ? "Explore Products" : "Sign Up Now"}
          </Link>
        </Button>
        <Button asChild variant={"link"}>
          <Link href={user ? "/referrals" : "/login"}>
            {user ? "Referrals" : "Log In"}
          </Link>
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-4 px-4">
        <h2 className="text-3xl font-semibold text-center mb-4 text-purple-800">
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
      <section className="py-12 px-4 text-center bg-purple-100">
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
          <Link href={user ? "/products" : "/signup"}>
            {user ? "Explore Products" : "Sign Up Now"}
          </Link>
        </Button>
      </section>

      <section className="py-8 px-4 bg-purple-50 max-w-[80%] mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6 text-purple-800">
          What Our Users Say
        </h2>
        <div className="max-w-4xl mx-auto">
          <Carousel>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-lg text-gray-600 italic">
                        "{testimonial.quote.replace("{app.name}", app.name)}"
                      </p>
                      <p className="mt-4 font-semibold">
                        - {testimonial.author}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
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
