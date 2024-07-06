import { getCurrentUserOrRedirect } from "@/auth/user";
import WithdrawalModal from "@/components/modals/withdrawal";
import CopyButton from "@/components/small/copy-button";
import NothingHere from "@/components/small/nothing-here";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import app from "@/constants/app";
import rewards from "@/constants/rewards";
import { Link, ShoppingCart } from "lucide-react";
import { headers } from "next/headers";

const ReferralsPage = async () => {
  const headersList = headers();

  const hostname = headersList.get("host");
  const user = await getCurrentUserOrRedirect();
  const referralLink = `https://${hostname}/invite/${user.referralCode}`;

  // Mock data - replace with actual data from your backend
  const totalInvited = user.referredUsers.length;
  const balance = user.balance;

  const invitedUsers = user.referredUsers.map((user) => ({
    id: user.id,
    name: user.fullName,
    signedUp: true,
    purchased: user.orders.length > 0,
    signUpDate: user.createdAt,
    purchaseDate: user.orders[0]?.createdAt,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-purple-700">
              Your {app.name} Referrals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-purple-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-purple-700">
                How Referrals Work
              </h3>
              <p className="text-sm text-purple-600">
                It's easy to earn with our referral program:
              </p>
              <ul className="list-disc list-inside text-sm text-purple-600 mt-2 space-y-1">
                <li>Share your unique referral link with friends</li>
                <li>
                  Earn KSH {rewards.onSignup.referrer} when a friend signs up
                </li>
                <li>
                  Earn KSH {rewards.onFirstPurchase.referrer} when they make
                  their first purchase
                </li>
                <li>There's no limit - refer as many friends as you want!</li>
              </ul>
              <p className="text-sm text-purple-600 mt-2 font-semibold">
                Start sharing and watch your earnings grow!
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Your Referral Link</h3>
              <div className="flex space-x-2">
                <Input value={referralLink} readOnly className="flex-grow" />
                <CopyButton dontNormalize link={referralLink} />
              </div>
            </div>

            <div className="sm:grid grid-cols-2 gap-4 ">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">Total Invited</h3>
                  <p className="text-3xl font-bold text-purple-600">
                    {totalInvited}
                  </p>
                </CardContent>
              </Card>
              <Card className="mt-4 sm:mt-auto">
                <CardContent className="p-4 ">
                  <h3 className="text-lg font-semibold flex justify-between">
                    My balance
                    {
                      <WithdrawalModal currentBalance={balance}>
                        <Button size={"sm"} variant={"outline"}>
                          Withdraw
                        </Button>
                      </WithdrawalModal>
                    }
                  </h3>
                  <p className="text-3xl font-bold text-purple-600">
                    KSH {balance.toLocaleString()}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Invited Friends</h3>
              {invitedUsers.length === 0 && (
                <NothingHere
                  icon="frown"
                  message="You haven't invited any friends yet. Share your referral link to start earning!"
                  title="No Invited Friends"
                />
              )}
              <div className="space-y-2">
                {invitedUsers.map((user) => (
                  <Card key={user.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-semibold">{user.name}</p>
                        <div className="flex space-x-2">
                          {user.signedUp && (
                            <Link className="h-5 w-5 text-green-500" />
                          )}
                          {user.purchased && (
                            <ShoppingCart className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Signed up:{" "}
                        {new Date(user.signUpDate).toLocaleDateString()}
                      </p>
                      {user.purchaseDate && (
                        <p className="text-sm text-gray-600">
                          First purchase:{" "}
                          {new Date(user.purchaseDate).toLocaleDateString()}
                        </p>
                      )}
                      {/* <p className="text-sm font-semibold text-purple-600 mt-2">
                        Earned: KSH{" "}
                        {(
                          (user.signedUp ? {
                            
                          } : 0) +
                          (user.purchased ? 500 : 0)
                        ).toLocaleString()}
                      </p> */}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReferralsPage;
