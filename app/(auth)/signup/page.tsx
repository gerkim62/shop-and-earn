import SignUpForm from "@/components/forms/signup";
import Link from "@/components/small/link-with-loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import app from "@/constants/app";
import { Coins, Gift, Heart, ShieldCheck } from "lucide-react";

type SignupPageProps = {
  searchParams: {
    inviteCode?: string;
  };
};

const Signup = ({ searchParams: { inviteCode } }: SignupPageProps) => {
  // console.log(inviteCode);
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row-reverse gap-8">
          {/* Signup Form */}
          <Card className="flex-grow w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-purple-700">
                Create your {app.name} Account
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SignUpForm inviteCode={inviteCode ?? null} />

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-purple-600 hover:underline"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Referral Information */}
          <Card className="flex-grow hidden lg:flex flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-purple-700">
                Why Join {app.name}?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Gift className="h-10 w-10 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-lg">Earn Rewards</h3>
                  <p className="text-gray-600">
                    Get cash bonuses for every friend you refer who signs up and
                    makes a purchase. The more friends you invite, the more you
                    earn!
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Coins className="h-10 w-10 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-lg">Exclusive Discounts</h3>
                  <p className="text-gray-600">
                    Access special deals and discounts available only to our
                    referral program members. Save more on your favorite
                    products and services.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <ShieldCheck className="h-10 w-10 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-lg">Secure and Reliable</h3>
                  <p className="text-gray-600">
                    Our referral program is built on a secure platform, ensuring
                    your information and earnings are safe. Trust in our
                    commitment to your privacy and security.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Heart className="h-10 w-10 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-lg">Support a Cause</h3>
                  <p className="text-gray-600">
                    Part of our referral program proceeds goes to support local
                    charities. Feel good about contributing to meaningful causes
                    while earning rewards.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;
