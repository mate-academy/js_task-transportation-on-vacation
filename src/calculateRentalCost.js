/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const BASE_TOTAL_PRICE = PRICE_PER_DAY * days;

  if (days < SHORT_TERM) {
    return BASE_TOTAL_PRICE;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return BASE_TOTAL_PRICE - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return BASE_TOTAL_PRICE - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
