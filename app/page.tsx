import { getCurrentUser } from "@/auth/user";
import Link from "@/components/small/link-with-loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, CreditCard, Gift, Smartphone } from "lucide-react";
import React from "react";

const testimonials = [
  {
    quote: "I never thought I could afford a smartphone. Thanks to Lipa Mdogo Mdogo, I now own one!",
    author: "Sarah M., Nairobi",
  },
  {
    quote: "The daily payment plan fits perfectly with my income. Plus, I earned extra through referrals!",
    author: "John D., Mombasa",
  },
  {
    quote: "I love my new phone, and the referral program helped me save even more on my payments.",
    author: "Alice K., Kisumu",
  },
  {
    quote: "Lipa Mdogo Mdogo made it possible for me to get a quality smartphone. The referral bonus was a great surprise!",
    author: "Peter N., Eldoret",
  },
  {
    quote: "I referred my friends to the program, and we're all enjoying our new phones. The extra earnings were a nice touch!",
    author: "Grace L., Nakuru",
  },
  {
    quote: "The flexibility of payments and the chance to earn through referrals make this program unbeatable.",
    author: "David O., Thika",
  },
  {
    quote: "I'm so glad I found Lipa Mdogo Mdogo. Affordable payments and referral rewards - what's not to love?",
    author: "Lydia M., Nyeri",
  },
  {
    quote: "This program made my dream of owning a smartphone a reality. The referral system is an added bonus!",
    author: "Brian K., Malindi",
  },
  {
    quote: "I've recommended Lipa Mdogo Mdogo to all my friends. It's a win-win with the referral program!",
    author: "Esther W., Kericho",
  },
  {
    quote: "Affordable smartphone payments and the chance to earn? Lipa Mdogo Mdogo delivers on both fronts!",
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
          Get Your Dream Phone with Lipa Mdogo Mdogo!
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Affordable daily payments, quality smartphones, and rewards for referrals.
        </p>
        <Button
          size="lg"
          asChild
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <Link href={user ? "/products" : "/signup"}>
            {user ? "Explore Phones" : "Sign Up Now"}
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
          Why Choose Lipa Mdogo Mdogo?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={<Smartphone className="h-12 w-12 text-purple-600" />}
            title="Quality Smartphones"
            description="Choose from top brands like Samsung, Apple, Oppo, and Tecno"
          />
          <FeatureCard
            icon={<CreditCard className="h-12 w-12 text-purple-600" />}
            title="Affordable Payments"
            description="Pay in small, manageable daily or monthly installments"
          />
          <FeatureCard
            icon={<Calendar className="h-12 w-12 text-purple-600" />}
            title="Flexible Terms"
            description="Payment plans up to one year to suit your budget"
          />
          <FeatureCard
            icon={<Gift className="h-12 w-12 text-purple-600" />}
            title="Referral Rewards"
            description="Earn money by referring friends to the program"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 text-center bg-purple-100">
        <h2 className="text-3xl font-bold mb-6 text-purple-800">
          Ready to Own Your Dream Phone?
        </h2>
        <p className="text-xl mb-8 text-gray-600">
          Join thousands of happy users who are enjoying their new smartphones.
        </p>
        <Button
          size="lg"
          asChild
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <Link href={user ? "/products" : "/signup"}>
            {user ? "Explore Phones" : "Sign Up Now"}
          </Link>
        </Button>
      </section>

      <section className="py-8 px-4 bg-purple-50 max-w-[80%] mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6 text-purple-800">
          What Our Customers Say
        </h2>
        <div className="max-w-4xl mx-auto">
          <Carousel>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-lg text-gray-600 italic">
                        "{testimonial.quote}"
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