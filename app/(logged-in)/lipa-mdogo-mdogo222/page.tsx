import { getCurrentUserOrRedirect } from "@/auth/user";
import PickupStationModal from "@/components/modals/pickup-station";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import {
  Clock,
  ExternalLink,
  Info,
  MapPin,
  Phone,
  Share2,
  Smartphone,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getLMMDetails } from "./helpers";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import rewards from "@/constants/rewards";

const OrderPage = async () => {
  const user = await getCurrentUserOrRedirect();

  const regionsPromise = prisma.region.findMany({
    include: {
      cities: {
        include: {
          stations: true,
        },
      },
    },
  });

  const userWithLipaMdogoMdogoOrderPromise = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      lipaMdogoMdogoOrder: {
        select: {
          station: true,
          product: true,
        },
      },
    },
  });

  const [regions, userWithLipaMdogoMdogoOrder] = await Promise.all([
    regionsPromise,
    userWithLipaMdogoMdogoOrderPromise,
  ]);

  const deliveryLocation =
    userWithLipaMdogoMdogoOrder?.lipaMdogoMdogoOrder?.station;
  const product = userWithLipaMdogoMdogoOrder?.lipaMdogoMdogoOrder?.product;

  if (!product) redirect("/products");

  const lmmDetails = getLMMDetails({
    discount: product.discount,
    originalPrice: product.price,
    referralBonus: user.balance,
  });

  const phoneDetails = {
    ...product,
    ...lmmDetails,
    deliveryFee: Number(deliveryLocation?.fee.replace(/\D/g, "") || "0") ?? 0,
    totalPrice: product.price - (product.price * product.discount) / 100,
    referralBonusDeduction: Math.min(user.balance, lmmDetails.deposit),
  };

  const allImages = product.images.concat(product.qualityImages);
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-purple-50 flex flex-col items-center justify-center space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold text-purple-800 text-center">
        Order Your Lipa Mdogo Mdogo Phone
      </h1>
      <p className="text-lg md:text-xl text-black mb-8 text-center max-w-2xl">
        Complete your order by choosing a delivery location and making the
        required payment.
      </p>

      {/* Referral Banner */}
      <Alert className="mb-8 bg-purple-100 border-purple-300 text-black max-w-2xl w-full">
        <Share2 className="h-4 w-4 text-purple-500" />
        <AlertTitle className="text-lg font-bold text-purple-800">
          Earn KSH {rewards.onSignup.referrer} for Every Friend You Refer!
        </AlertTitle>
        <AlertDescription className="text-black">
          Share Lipa Mdogo Mdogo with your friends and earn money towards your
          phone payments!
        </AlertDescription>
        <Button
          asChild
          className="mt-2 bg-purple-200 text-purple-700 hover:bg-purple-300 rounded-full"
        >
          <Link href="/referrals">Go to Referrals Page 🎉</Link>
        </Button>
      </Alert>

      {/* Phone Details Card */}
      <Card className="bg-white shadow-md rounded-xl max-w-2xl w-full mb-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-800 flex items-center">
            <Smartphone className="mr-2 text-purple-300" size={24} />
            Phone Details
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-col gap-4">
          <div className=" flex justify-center ">
            <Carousel className="w-[85%] max-w-xs">
              <CarouselContent>
                {allImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <Image
                          src={image}
                          alt={`Phone image ${index + 1}`}
                          width={160}
                          height={212}
                          className="max-w-full max-h-full object-contain"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className=" space-y-2">
            <h2 className="text-xl font-semibold mb-2 text-purple-700">
              {phoneDetails.name}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              {phoneDetails.description}
            </p>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b-2 border-purple-200">
                  <td className="py-3 text-purple-600 font-semibold">
                    Total Price{" "}
                    <span className="text-green-500">
                      ({product.discount}% off)
                    </span>
                    :
                  </td>
                  <td className="py-3 text-right font-bold">
                    KSH {phoneDetails.totalPrice}
                  </td>
                </tr>
                <tr className="border-b border-purple-100">
                  <td className="py-2 text-purple-600">Deposit:</td>
                  <td className="py-2 text-right">
                    KSH {phoneDetails.deposit}
                  </td>
                </tr>
                <tr className="border-b border-purple-100">
                  <td className="py-2 text-purple-600">
                    Referral Bonus Deduction:
                  </td>
                  <td className="py-2 text-right">
                    KSH {phoneDetails.referralBonusDeduction}
                  </td>
                </tr>
                <tr className="border-b border-purple-100">
                  <td className="py-2 text-purple-600">Delivery Fee:</td>
                  <td className="py-2 text-right">
                    KSH {phoneDetails.deliveryFee}
                  </td>
                </tr>
                <tr className="border-b-2 border-purple-200">
                  <td className="py-3 text-purple-600 font-semibold">
                    Daily Payment:
                  </td>
                  <td className="py-3 text-right font-bold">
                    KSH {phoneDetails.dailyPayment}
                  </td>
                </tr>
                <tr className="border-b border-purple-100">
                  <td className="py-2 text-purple-600">Remaining Balance:</td>
                  <td className="py-2 text-right">
                    KSH {phoneDetails.remainingBalance}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-purple-600">Payment Duration:</td>
                  <td className="py-2 text-right">{phoneDetails.duration}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Order Process Card */}
      <Card className="bg-white shadow-md rounded-xl max-w-2xl w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-800 flex items-center">
            <Truck className="mr-2 text-purple-300" size={24} />
            Complete Your Order
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-4">
            <PickupStationModal regions={regions}>
              <Button className="w-full bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-full">
                {deliveryLocation ? (
                  <span className="flex items-center">
                    <MapPin className="mr-2" size={16} />
                    Choose Different Location
                  </span>
                ) : (
                  "Choose Delivery Location 📍"
                )}
              </Button>
            </PickupStationModal>
            {deliveryLocation && (
              <div className="bg-purple-50 p-4 rounded-lg space-y-2">
                <h3 className="font-semibold text-purple-800">
                  {deliveryLocation.name}
                </h3>
                <p className="text-sm text-purple-600">
                  {deliveryLocation.address}, {deliveryLocation.town}
                </p>
                <p className="text-sm text-purple-600">
                  Delivery Fee: KSH {phoneDetails.deliveryFee}
                </p>
                <div className="flex items-center text-sm text-purple-600">
                  <Clock className="mr-2" size={14} />
                  {deliveryLocation.openingHours}
                </div>
                <div className="flex items-center text-sm text-purple-600">
                  <Phone className="mr-2" size={14} />
                  {deliveryLocation.contactInfo}
                </div>
                <a
                  href={deliveryLocation.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-700 hover:text-purple-900 flex items-center"
                >
                  <ExternalLink className="mr-2" size={14} />
                  View on Google Maps
                </a>
              </div>
            )}
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <p className="text-lg font-semibold text-purple-800 mb-2">
              Total Payment Due:
            </p>
            <p className="text-2xl font-bold text-purple-900">
              KSH {phoneDetails.deliveryFee + phoneDetails.deposit}
              <span className="text-sm font-normal text-purple-700 ml-2">
                (Deposit + Delivery Fee)
              </span>
            </p>
          </div>
          <Button
            className="w-full bg-purple-600 text-white hover:bg-purple-700 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!deliveryLocation}
          >
            Pay Now 💰
          </Button>
        </CardContent>
      </Card>
      {/* About Lipa Mdogo Mdogo Card */}
      <Card className="bg-purple-50 border-purple-200 max-w-2xl w-full">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 text-purple-800 flex items-center">
            <Info className="mr-2 text-purple-300" size={24} />
            About Lipa Mdogo Mdogo
          </h3>
          <p className="text-black">
            Lipa Mdogo Mdogo is an innovative phone financing program that
            allows you to own a quality smartphone through affordable daily
            payments.
          </p>
          <ul className="list-disc pl-5 mt-2 text-black">
            <li>Pay a small deposit and get your phone immediately</li>
            <li>Make manageable daily payments</li>
            <li>Choose from top smartphone brands</li>
            <li>Flexible payment terms up to 12 months</li>
            <li>No credit check required</li>
            <li>Earn rewards by referring friends to the program</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderPage;
