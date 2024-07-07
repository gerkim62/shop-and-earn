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
      "I can't believe how much I've earned just by referring my friends. Over KSH 10,000 so far!",
    author: "Sarah M., Nairobi",
  },
  {
    quote:
      "This app has completely changed how I shop. I get amazing discounts and earn money through referrals. Highly recommended!",
    author: "John D., Mombasa",
  },
  {
    quote:
      "It's so easy to use and I've saved so much on my purchases. Plus, the referral program is fantastic!",
    author: "Alice K., Kisumu",
  },
  {
    quote:
      "I love how I can earn money and save on products I need. This app is a game-changer!",
    author: "Peter N., Eldoret",
  },
  {
    quote:
      "The referral program is amazing. I've made so much money just by sharing the app with friends.",
    author: "Grace L., Nakuru",
  },
  {
    quote:
      "The discounts on products are unbelievable. I always check the app first before buying anything.",
    author: "David O., Thika",
  },
  {
    quote:
      "Earning KSH while shopping for discounted products? It doesn't get better than this!",
    author: "Lydia M., Nyeri",
  },
  {
    quote:
      "This app makes it so easy to save money and earn extra cash. It's a must-have!",
    author: "Brian K., Malindi",
  },
  {
    quote:
      "I've referred so many friends and made a lot of money. The best part is, they love the app too!",
    author: "Esther W., Kericho",
  },
  {
    quote:
      "Buying products at discounted prices and earning money through referrals is the best combo ever!",
    author: "James T., Kisii",
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
