/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const PRICE_PER_DAY = 40;

  let totalAmount = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    totalAmount -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    totalAmount -= SHORT_TERM_DISCOUNT;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
