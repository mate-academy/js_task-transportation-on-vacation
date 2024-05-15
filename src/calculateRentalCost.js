/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const PRICE = 40;
  const BASE_PRICE = days * PRICE;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return BASE_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return BASE_PRICE - SHORT_TERM_DISCOUNT;
  }

  return BASE_PRICE;
}

module.exports = calculateRentalCost;
