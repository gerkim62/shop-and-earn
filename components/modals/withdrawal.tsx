import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ShoppingBag, DollarSign, CreditCard } from "lucide-react";
import Link from "../small/link-with-loader";
import { formatNumber } from "@/lib/utils";

type WithdrawalModalProps = {
  currentBalance: number;
  children: React.ReactNode;
};

const WithdrawalModal = ({
  currentBalance,
  children,
}: WithdrawalModalProps) => {
  const withdrawalLimit = 10000;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-[95%]  bg-purple-50 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-purple-700">
            Withdrawal Options
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm">
            Withdraw your earnings via MPESA. Minimum withdrawal amount is KSH{" "}
            {formatNumber(withdrawalLimit)}.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 pt-0">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-500">
              Your Current Balance
            </span>
            <span className="text-lg font-bold text-purple-600">
              {formatNumber(currentBalance)} KSH
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="bg-purple-600 h-2.5 rounded-full"
              style={{
                width: `${Math.min(
                  (currentBalance / withdrawalLimit) * 100,
                  100
                )}%`,
              }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            You haven't reached the minimum withdrawable amount yet. But don't
            worry, you can still:
          </p>
          <div className="space-y-3">
            <div className="flex items-start space-x-2 text-sm">
              <ShoppingBag className="h-5 w-5 text-purple-600 mt-0.5" />
              <span>
                <strong>Shop Now:</strong> Use your full balance of{" "}
                {formatNumber(currentBalance)} KSH to buy products.
              </span>
            </div>
            <div className="flex items-start space-x-2 text-sm">
              <CreditCard className="h-5 w-5 text-purple-600 mt-0.5" />
              <span>
                <strong>Withdrawal:</strong> Once you reach{" "}
                {formatNumber(withdrawalLimit)} KSH, you can withdraw it via
                MPESA.
              </span>
            </div>
            <div className="flex items-start space-x-2 text-sm">
              <DollarSign className="h-5 w-5 text-purple-600 mt-0.5" />
              <span>
                <strong>Keep Earning:</strong> Refer friends to earn more and
                reach the withdrawal limit faster.
              </span>
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-start flex flex-col sm:flex-row gap-2">
          <Button asChild type="button" variant="default" className="w-full">
            <Link href="/products">View available Products </Link>
          </Button>
          <DialogClose>
            <Button type="button" variant="outline" className="w-full">
              Keep Earning
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WithdrawalModal;
