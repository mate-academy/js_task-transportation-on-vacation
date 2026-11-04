/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE_PER_DAY = 40;
  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_THRESHOLD = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const BASE_PRICE = days * BASE_PRICE_PER_DAY;

  if (days >= LONG_TERM_THRESHOLD) {
    return BASE_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_THRESHOLD) {
    return BASE_PRICE - SHORT_TERM_DISCOUNT;
  }

  return BASE_PRICE;
}

module.exports = calculateRentalCost;
