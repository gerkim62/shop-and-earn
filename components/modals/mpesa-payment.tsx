import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

type MpesaPaymentDialogProps = {
  children: React.ReactNode;
  total: number;
  referralBalance: number;
};

const MpesaPaymentDialog = ({
  children,
  referralBalance,
  total,
}: MpesaPaymentDialogProps) => {
  const amountToPay = total - referralBalance;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-[95%] bg-purple-50 rounded-xl p-4">
        <DialogHeader className="mb-2">
          <DialogTitle className="text-xl font-bold text-purple-800 flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-purple-600" />
            Pay with M-Pesa
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center">
            <div>
              <p className="text-purple-600">Total: KES {total}</p>
              <p className="text-purple-600">
                Referrals: KES {referralBalance}
              </p>
            </div>
            <p className="text-purple-800 font-semibold">
              Pay: KES {amountToPay}
            </p>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-purple-700 pl-2">
            <li>M-Pesa menu or *334#</li>
            <li>Lipa na M-Pesa</li>
            <li>Buy Goods and Services</li>
            <li>
              Till Number: <span className="font-semibold">4523484</span>
            </li>
            <li>Amount: KES {amountToPay}</li>
            <li>Enter M-Pesa PIN</li>
            <li>Confirm transaction</li>
          </ol>
          <p className="text-purple-600 text-xs italic">
            Your referral balance of KES {referralBalance} will be
            auto-deducted.
          </p>
        </div>
        <DialogFooter className="mt-3 gap-2 flex justify-between">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-full text-sm px-3 py-1"
            >
              Cancel
            </Button>
          </DialogClose>

          <Button
            type="button"
            className="bg-purple-600 text-white hover:bg-purple-700 rounded-full text-sm px-3 py-1"
          >
            I have paid
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MpesaPaymentDialog;
