/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const COST_PER_DAY = 40;
  const BASE_COST = days * COST_PER_DAY;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return BASE_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return BASE_COST - SHORT_TERM_DISCOUNT;
  }

  return BASE_COST;
}

module.exports = calculateRentalCost;
