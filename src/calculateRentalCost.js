/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LESS_TERM = 3;
  const LONG_TERM = 7;
  const LESS_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const BASE_PRICE = 40;

  if (days >= LONG_TERM) {
    return BASE_PRICE * days - LONG_TERM_DISCOUNT;
  }

  if (days >= LESS_TERM) {
    return BASE_PRICE * days - LESS_TERM_DISCOUNT;
  }

  return BASE_PRICE * days;
}

module.exports = calculateRentalCost;
