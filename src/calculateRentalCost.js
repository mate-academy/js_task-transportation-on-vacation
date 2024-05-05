/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const COST_PER_DAY = 40;
  const COST_WITHOUT_DISCOUNT = days * COST_PER_DAY;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return COST_WITHOUT_DISCOUNT - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return COST_WITHOUT_DISCOUNT - SHORT_TERM_DISCOUNT;
  }

  return COST_WITHOUT_DISCOUNT;
}

module.exports = calculateRentalCost;
