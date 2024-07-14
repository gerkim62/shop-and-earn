function calculatePaymentPlan(price: number) {
  // Ensure the price is a multiple of 10 by rounding up to the nearest multiple of 10
  if (price % 10 !== 0) {
    price = Math.ceil(price / 10) * 10;
  }

  // Calculate the deposit (let's assume 10% of the price for this example)
  let deposit = Math.round(price * 0.1);
  deposit = Math.ceil(deposit / 10) * 10; // Ensure deposit is a multiple of 10

  // Calculate the remaining balance
  let balance = price - deposit;

  // Initialize variables for daily payment and days
  let dailyPayment;
  let days;

  // Start with a reasonable daily payment
  for (let payment = 5; payment <= balance; payment += 5) {
    days = Math.floor(balance / payment);
    if (days <= 365 && days > 0) {
      dailyPayment = payment;
      break;
    }
  }

  // Return the calculated values
  return {
    deposit: deposit,
    balance: balance,
    dailyPayment: dailyPayment,
    days: days,
  };
}

export { calculatePaymentPlan };
