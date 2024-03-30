/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_RENT = 7;
  const SHORT_TERM_RENT = 3;

  const totalPay = days * PRICE_PER_DAY;

  if (days >= LONG_TERM_RENT) {
    return totalPay - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENT) {
    return totalPay - SHORT_TERM_DISCOUNT;
  }

  return totalPay;
}

module.exports = calculateRentalCost;
