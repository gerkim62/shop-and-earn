import Link from "@/components/small/link-with-loader";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share2 } from "lucide-react";
import Cart from "./_components/cart";
import { getCurrentUserOrRedirect } from "@/auth/user";
import prisma from "@/lib/prisma";
import rewards from "@/constants/rewards";

const CartCheckoutPage = async () => {
  const user = await getCurrentUserOrRedirect();

  const cartPromise = await prisma.cart.findUnique({
    where: {
      userId: user.id,
    },
    include: {
      station: true,
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  const regionsPromise = await prisma.region.findMany({
    include: {
      cities: {
        include: {
          stations: true,
        },
      },
    },
  });

  const [cart, regions] = await Promise.all([cartPromise, regionsPromise]);

  return (
    <div className="container mx-auto px-4 sm:my-4 rounded py-8 min-h-screen bg-gradient-to-b from-pink-100 to-purple-100  p-4 max-w-4xl space-y-8">
      <h1 className="text-4xl font-bold  text-purple-800 -mb-6">
        My Cart - Check Out
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Review your items, choose delivery, and complete your purchase
      </p>

      {/* Referral Banner */}
      <Alert className="mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <Share2 className="h-4 w-4" />
        <AlertTitle className="text-lg font-bold">
          Earn {rewards.onSignup.referrer} KSH for Every Friend You Refer!
        </AlertTitle>
        <AlertDescription>
          Share your unique code and start earning now. The more friends join,
          the more you save on your next purchase!
        </AlertDescription>
        <Button
          asChild
          className="mt-2 bg-white text-purple-700 hover:bg-purple-100 ml-6"
        >
          <Link href={"/referrals"}>Go to Referrals Page</Link>
        </Button>
      </Alert>

      {/* Cart */}
      <Cart referralBalance={user.balance} regions={regions} cart={cart} />

      {/* Additional Referral Incentive */}
      <Card className="mt-8 bg-yellow-50">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">
            💡 Quick Tip: Refer More, Save More!
          </h3>
          <p>
            You're just a couple referrals away from getting your next purchase
            for free! Refer now and watch your savings grow.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartCheckoutPage;
