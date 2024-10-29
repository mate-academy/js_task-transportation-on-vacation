/**
 * @param {number} days
 *
 * @return {number}
 */
const PRICE_PER_DAY = 40;
const LONG_TERM = 7;
const DISCOUNT_LONG_TERM = 50;
const SHORT_TERM = 3;
const DISCOUNT_SHORT_TERM = 20;

function calculateRentalCost(days) {
  // write code here
  const TOTAL_PRICE = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return TOTAL_PRICE - DISCOUNT_LONG_TERM;
  }

  if (days >= SHORT_TERM) {
    return TOTAL_PRICE - DISCOUNT_SHORT_TERM;
  }

  return TOTAL_PRICE;
}
module.exports = calculateRentalCost;
