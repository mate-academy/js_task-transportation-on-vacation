/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SORT_TERM_DISCOUNT = 20;

  const price = BASE_PRICE * days;

  if (days >= LONG_TERM) {
    return price - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return price - SORT_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
