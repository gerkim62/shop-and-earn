import { getCurrentUserOrRedirect } from "@/auth/user";
import PickupStationModal from "@/components/modals/pickup-station";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import prisma from "@/lib/prisma";
import {
  Clock,
  ExternalLink,
  Gift,
  Info,
  MapPin,
  Phone,
  Tag,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { calculatePaymentPlan } from "./_utils";
import rewards from "@/constants/rewards";
import { Badge } from "@/components/ui/badge";

const CheckoutPage = async () => {
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

  const plan = calculatePaymentPlan(
    product.price - (product.discount * product.price) / 100 - user.balance
  );

  function ensureHttpsProtocol(urlString: string) {
    try {
      // Check if the URL already includes a protocol
      const url = new URL(urlString);
      return url.href;
    } catch (error) {
      // If URL constructor throws an error, it means the protocol is likely missing
      return `https://${urlString}`;
    }
  }

  function calculateDeliveryDate(minDays: number) {
    const today = new Date();
    let futureDate = new Date(today.getTime() + minDays * 24 * 60 * 60 * 1000);

    // If the future date is on a weekend (0 = Sunday, 6 = Saturday)
    while (futureDate.getDay() === 0 || futureDate.getDay() === 6) {
      futureDate.setDate(futureDate.getDate() + 1);
    }

    return futureDate.toLocaleDateString();
  }

  const paymentDetails = {
    originalPrice: product.price,
    discountPercentage: product.discount,
    discountAmount: (product.discount * product.price) / 100,
    totalAmount:
      product.price - (product.discount * product.price) / 100 - user.balance,
    deposit: plan.deposit,
    referralBonus: user.balance,
    deliveryFee: Number(deliveryLocation?.fee.replace(/\D/g, "") || "0") ?? 0,
    dailyPayment: plan.dailyPayment,
    remainingAmount: plan.balance,
    duration: plan.days + " Days",
  };

  const phoneImages = product.qualityImages.concat(product.images);

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-purple-800 text-center">
          Order Your Lipa Mdogo Mdogo Phone
        </h1>
        <p className="text-gray-700 text-center text-lg">
          Complete your order by choosing a delivery location and making the
          required payment.
        </p>

        {/* Referral Card */}
        <Card className="bg-white rounded-xl shadow-md overflow-hidden">
          <CardHeader className="bg-purple-100">
            <CardTitle className="flex items-center text-purple-800">
              <Gift className="mr-2 text-purple-500" />
              Earn KSH {rewards.onSignup.referrer} for Every Friend You Refer!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 mb-4">
              Share Lipa Mdogo Mdogo with your friends and earn money towards
              your phone payments!
            </p>
            <Button className="bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-full shadow">
              Go to Referrals Page &rarr;
            </Button>
          </CardContent>
        </Card>

        {/* Phone Details Card */}
        <Card className="bg-white rounded-xl shadow-md overflow-visible">
          <CardHeader className="bg-purple-100">
            <CardTitle className="flex items-center text-purple-800">
              <Phone className="mr-2 text-purple-500" />
              {product.manufacturer} {product.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <Carousel className="w-[95%] max-w-xs mx-auto">
              <CarouselContent>
                {phoneImages.map((src, index) => (
                  <CarouselItem className="my-auto" key={index}>
                    <div className="relative w-full ">
                      <Image
                        src={src}
                        alt={`Phone image ${index + 1}`}
                        width={600}
                        height={600}
                        className="object-fit rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <p className="text-gray-700">
              Infinix Smart 8 Plus Android smartphone. Announced Jan 2024.
              Features 6.6″ display, Helio G36 chipset, 6000 mAh battery, 128 GB
              storage, 4 GB RAM.
            </p>
            <div className="bg-green-100 text-green-800 p-4 rounded-lg flex items-center justify-center space-x-2">
              <Tag className="w-5 h-5" />
              <span className="font-semibold">
                Save {paymentDetails.discountPercentage}% on this phone!
              </span>
            </div>
            <table className="w-full text-gray-800 border-collapse">
              <tbody>
                <tr>
                  <td className="font-semibold py-2">Original Price:</td>
                  <td className="text-right line-through">
                    KSH {paymentDetails.originalPrice}
                  </td>
                </tr>
                <tr className="text-green-600">
                  <td className="font-semibold py-2">Discount:</td>
                  <td className="text-right">
                    -KSH {paymentDetails.discountAmount}
                  </td>
                </tr>
                <tr className="text-green-600">
                  <td className="font-semibold py-2">Referral Bonus:</td>
                  <td className="text-right">
                    -KSH {paymentDetails.referralBonus}
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-300 bg-gray-100">
                  <td className="font-bold py-3">Amount to Pay:</td>
                  <td className="text-right font-bold">
                    KSH {paymentDetails.totalAmount}
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-300">
                  <td className="font-semibold py-2">Deposit:</td>
                  <td className="text-right">KSH {paymentDetails.deposit}</td>
                </tr>{" "}
                <tr>
                  <td className="font-semibold py-2">Remaining Amount:</td>
                  <td className="text-right">
                    KSH {paymentDetails.remainingAmount}
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold py-2">Daily Payment:</td>
                  <td className="text-right">
                    KSH {paymentDetails.dailyPayment}
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold py-2">Duration:</td>
                  <td className="text-right">{paymentDetails.duration}</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md rounded-xl  w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-800 flex items-center">
              <Truck className="mr-2 text-purple-300" size={24} />
              Complete Your Order ({product.manufacturer} {product.name})
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
                    {deliveryLocation.address}
                  </p>
                  <p className="text-sm text-purple-600">
                    Delivery Fee: KSH {paymentDetails.deliveryFee}
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
                    href={ensureHttpsProtocol(deliveryLocation.googleMapsLink)}
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
            <div className="bg-purple-100 p-4 rounded-lg space-y-4">
              <div className="space-y-1 sm:flex items-center sm:gap-1">
                <h2 className="text-lg font-semibold text-purple-800">
                  Delivery date: {calculateDeliveryDate(7)}
                </h2>
                <Badge className="text-sm ">if the order is placed today</Badge>
              </div>

              <h3 className="font-semibold text-sm text-purple-800">
                To place your order, please complete the following payment:
              </h3>

              <div className="space-y-1 sm:flex items-center sm:gap-1">
                <p className="text-2xl font-bold text-purple-900">
                  KSH {paymentDetails.deposit + paymentDetails.deliveryFee}
                </p>
                <p className="text-sm text-purple-700">
                  (Deposit + Delivery Fee)
                </p>
              </div>
            </div>
            <Button
              className="w-full bg-purple-600 text-white hover:bg-purple-700 rounded-full disabled:opacity-50 disabled:cursor-not-allowed uppercase"
              disabled={!deliveryLocation}
            >
              Lipa na M-Pesa
            </Button>
          </CardContent>
        </Card>

        {/* About Lipa Mdogo Mdogo Card */}
        <Card className="bg-white rounded-xl shadow-md overflow-hidden">
          <CardHeader className="bg-purple-100">
            <CardTitle className="flex items-center text-purple-800">
              <Info className="mr-2 text-purple-500" />
              About Lipa Mdogo Mdogo
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 mb-4">
              Lipa Mdogo Mdogo is an innovative phone financing program that
              allows you to own a quality smartphone through affordable daily
              payments.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
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
    </div>
  );
};

export default CheckoutPage;
