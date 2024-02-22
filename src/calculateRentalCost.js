/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const defaultPrice = days * RENT_COST;

  if (days >= LONG_TERM) {
    return defaultPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return defaultPrice - SHORT_TERM_DISCOUNT;
  }

  return defaultPrice;
}

module.exports = calculateRentalCost;
