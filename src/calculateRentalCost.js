/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const BASE_PRICE = 40;
  const LONG_TERM = 3;
  const LONG_TERM_DISCOUNT = 20;
  const VERY_LONG_TERM = 7;
  const VERY_LONG_TERM_DISCOUNT = 50;

  if (days >= VERY_LONG_TERM) {
    return BASE_PRICE * days - VERY_LONG_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return BASE_PRICE * days - LONG_TERM_DISCOUNT;
  }

  return BASE_PRICE * days;
}

module.exports = calculateRentalCost;
