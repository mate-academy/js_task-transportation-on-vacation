/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = days * 40;
  const LONG_TERM = 7;
  const MIDDLE_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return BASE_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return BASE_PRICE - MIDDLE_TERM_DISCOUNT;
  }

  return BASE_PRICE;
}

module.exports = calculateRentalCost;
