/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;
  const BASE_PRICE = days * PRICE;
  const LONG_TERM = 7;
  const MIN_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return BASE_PRICE - LONG_TERM_DISCOUNT;
  } else if (days >= MIN_TERM) {
    return BASE_PRICE - SHORT_TERM_DISCOUNT;
  } else {
    return BASE_PRICE;
  }
}

module.exports = calculateRentalCost;
