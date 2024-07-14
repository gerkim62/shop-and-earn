import { getCurrentUserOrRedirect } from "@/auth/user";
import PreferencesModal from "@/components/modals/preferences";
import WithdrawalModal from "@/components/modals/withdrawal";
import CopyButton from "@/components/small/copy-button";
import NothingHere from "@/components/small/nothing-here";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { INVITE_MESSAGE_TEMPLATE } from "@/constants/invite";
import limits from "@/constants/limits";
import { formatNumber } from "@/lib/utils";
import { Gift, ShoppingBag, User } from "lucide-react";
import { headers } from "next/headers";

const MyAccountPage = async () => {
  const user = await getCurrentUserOrRedirect();

  const headersList = headers();

  const hostname = headersList.get("host");

  const referralLink = `https://${hostname}/invite/${user.referralCode}`;

  const inviteMessage = INVITE_MESSAGE_TEMPLATE.replace(
    "{{LINK}}",
    referralLink
  );

  const referrals = user.referredUsers.map((referredUser) => ({
    id: referredUser.id,
    name: referredUser.fullName,
    date: referredUser.createdAt.toLocaleDateString(),
    status: referredUser.orders.length > 0 ? "Ordered" : "Joined",
  }));

  console.log(referrals);

  const orders = user.orders.map((order) => ({
    id: order.id,
    date: order.createdAt.toLocaleDateString(),
    total: order.totalAmount,
    status: order.status,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-purple-800">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2" />
              Account Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              <Avatar className="h-16 w-16 mr-4">
                <AvatarImage
                  src="/api/placeholder/120/120"
                  alt={user.fullName}
                />
                <AvatarFallback>{user.fullName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">{user.fullName}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <PreferencesModal>
              <Button variant="outline" className="w-full">
                Change your Preferences
              </Button>
            </PreferencesModal>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="mr-2" />
              Referral Program
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Your Referral Link:</p>
            <div className="flex mb-4 ">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-grow  w-32  border rounded-l-md px-2 "
              />
              <CopyButton
                text={inviteMessage}
                className="rounded-l-none "
              ></CopyButton>
            </div>
            <p className="mb-2">Referral Progress:</p>
            <Progress
              value={(user.balance / limits.withdrawal) * 100}
              className="mb-2"
            />
            <p className="text-sm text-gray-600">
              {formatNumber(user.balance)} / {formatNumber(limits.withdrawal)}{" "}
              KSH
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShoppingBag className="mr-2" />
              Rewards Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-3xl font-bold text-green-600 mb-2">
              KSH {formatNumber(user.balance)}
            </h3>
            <p className="text-gray-600 mb-4">
              Available to use on your next purchase
            </p>
            <WithdrawalModal currentBalance={user.balance}>
              <Button className="w-full">Withdraw Rewards</Button>
            </WithdrawalModal>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="referrals" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="referrals">Referrals</TabsTrigger>
          <TabsTrigger value="orders">Order History</TabsTrigger>
        </TabsList>
        <TabsContent value="referrals">
          <Card>
            <CardHeader>
              <CardTitle>Your Referrals</CardTitle>
            </CardHeader>
            <CardContent>
              {referrals.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {referrals.map((referral) => (
                      <TableRow key={referral.id}>
                        <TableCell>{referral.name}</TableCell>
                        <TableCell>{referral.date}</TableCell>
                        <TableCell>{referral.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <>
                  <NothingHere
                    icon="frown"
                    title="You haven't referred anyone yet"
                    message="Start sharing your referral link to earn rewards."
                  />
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>My Orders ({orders.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {orders.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order #</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell className="whitespace-nowrap">
                          {formatNumber(order.total)} KSH
                        </TableCell>
                        <TableCell>{order.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <NothingHere
                  icon="frown"
                  title="No orders found"
                  message="You haven't placed any orders yet."
                />
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyAccountPage;
