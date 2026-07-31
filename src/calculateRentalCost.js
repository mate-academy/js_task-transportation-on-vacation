/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const MODERATE_STAY_TIME = 3;
  const MODERATE_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const BASE_PRICE = days * 40;

  if (days >= LONG_TERM) {
    return BASE_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= MODERATE_STAY_TIME) {
    return BASE_PRICE - MODERATE_DISCOUNT;
  }

  return BASE_PRICE;
}

module.exports = calculateRentalCost;
