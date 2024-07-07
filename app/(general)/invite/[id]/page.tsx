import Link from "@/components/small/link-with-loader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import app from "@/constants/app";
import rewards from "@/constants/rewards";
import prisma from "@/lib/prisma";
import { CreditCard, Gift, ShoppingBag } from "lucide-react";
import { redirect } from "next/navigation";

type InvitationPageProps = {
  params: {
    id: string;
  };
};

const InvitationPage = async ({ params: { id } }: InvitationPageProps) => {
  const code = Number(id);
  if (isNaN(code)) {
    redirect("/signup");
  }
  const referrer = await prisma.user.findUnique({
    where: {
      referralCode: Number(id),
    },
  });

  if (!referrer) {
    redirect("/signup");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden">
        <CardHeader className="text-center bg-gradient-to-r from-indigo-400 to-purple-500 py-8">
          <Gift className="mx-auto text-white w-20 h-20 mb-4" />
          <CardTitle className="text-3xl font-bold text-white">
            {referrer.fullName.split(" ")[0]} has invited you to join {app.name}
            !
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 text-center space-y-6 p-8">
          <div className="flex items-center justify-center space-x-2 text-xl">
            <CreditCard className="text-green-500 w-6 h-6" />
            <p>
              You and {referrer.fullName.split(" ")[0]} will each earn{" "}
              <span className="font-semibold text-green-500">
                KSH {rewards.onSignup.user}
              </span>
            </p>
          </div>
          <p className="text-lg">
            Once you join, you can start shopping or refer friends to earn more
            rewards.
          </p>
          <div className="bg-indigo-100 text-indigo-800 p-4 rounded-lg">
            <p className="font-semibold text-lg">
              Exclusive discounts await you inside!
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 p-8 bg-gray-50">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 rounded-full py-6 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Link href={`/signup?inviteCode=${id}`}>Create Account</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full text-indigo-700 border-indigo-300 hover:bg-indigo-50 rounded-full py-6 text-lg font-semibold"
          >
            <Link href="/login">Log In</Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-purple-500 hover:text-purple-700 text-lg"
          >
            <Link href={`/products`}>
              <ShoppingBag className="mr-2 h-5 w-5" />
              Browse Products
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default InvitationPage;
