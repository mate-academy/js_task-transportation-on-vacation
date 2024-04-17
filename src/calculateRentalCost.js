/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const PRICE_PER_DAY = 40;
  const BASE_PRICE = PRICE_PER_DAY * days;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days < SHORT_TERM) {
    return BASE_PRICE;
  } else if (days < LONG_TERM) {
    return BASE_PRICE - SHORT_TERM_DISCOUNT;
  }

  return BASE_PRICE - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
