/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const LONG_TERM = 7;
  const DISCOUNT_FOR_LONG_TERM = 50;
  const SHORT_TERM = 3;
  const DISCOUNT_FOR_SHORT_TERM = 20;
  const PAY_FOR_RENT = 40;
  let totalPrice = 0;

  for (let i = 0; i < days; i++) {
    totalPrice += PAY_FOR_RENT;
  }

  if (days >= LONG_TERM) {
    return totalPrice - DISCOUNT_FOR_LONG_TERM;
  }

  if (days >= SHORT_TERM) {
    return totalPrice - DISCOUNT_FOR_SHORT_TERM;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
