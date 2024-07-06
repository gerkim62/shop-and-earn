import React, { useState } from "react";
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
import { toast } from "sonner";
import { graduateCartToOrder } from "@/actions/cart";
import { useRouter } from "next/navigation";
import { useCart } from "../context/cart";

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

  const [graduating, setGraduating] = useState(false);
  const router = useRouter();
  const { setCartProductIds } = useCart();

  async function handlePaid() {
    const confirmPayment = () => {
        const message = `
          🎉 Almost there! Let's make sure everything's in order:
      
          • Have you completed the payment?
          • Your referral balance will be applied automatically.
      
          ⚠️ Important note:
          If you confirm without having paid, your referral balance 
          will be deducted and the order may be cancelled.
      
          Ready to proceed? Click OK if you've made the payment.
          If you need more time, no worries! Just click Cancel.
        `;
      
        return window.confirm(message);
      };

    if (!confirmPayment()) return;

    try {
      setGraduating(true);
      await graduateCartToOrder({
        grandTotal: total,
        referralAmountToDeduct: referralBalance,
      });

      toast.success("Order placed successfully awaiting approval.");

      setCartProductIds([]);
      router.push("/account");
    } catch (error) {
      toast.error("Something went wrong!");
    }

    setGraduating(false);
  }

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
              disabled={graduating}
              type="button"
              variant="outline"
              className="bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-full text-sm px-3 py-1"
            >
              Cancel
            </Button>
          </DialogClose>

          <Button
            disabled={graduating}
            onClick={handlePaid}
            type="button"
            className="bg-purple-600 text-white hover:bg-purple-700 rounded-full text-sm px-3 py-1"
          >
            {graduating ? "Placing order..." : "I have paid"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MpesaPaymentDialog;
