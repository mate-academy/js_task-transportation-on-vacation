/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const DISCOUNT_LONG_TERM = 50;
  const SHORT_TERM = 3;
  const DISCOUNT_SHORT_TERM = 20;

  if (days >= LONG_TERM) {
    return days * PRICE_PER_DAY - DISCOUNT_LONG_TERM;
  }

  if (days >= SHORT_TERM) {
    return days * PRICE_PER_DAY - DISCOUNT_SHORT_TERM;
  }

  return days * PRICE_PER_DAY;
}
module.exports = calculateRentalCost;
