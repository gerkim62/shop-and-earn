// @ts-ignore

function getLMMDetails({
  referralBonus,
  discount,
  originalPrice,
}: {
  referralBonus: number;
  discount: number;
  originalPrice: number;
}) {
  return {
    deposit: 100,
    dailyPayment: 20,
    remainingBalance: 60,
    duration: "3 months",
  };
}

export { getLMMDetails };
