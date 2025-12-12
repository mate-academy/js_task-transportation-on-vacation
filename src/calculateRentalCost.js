/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const COST_PER_DAY = 40;
  const COST_TOTAL_RENT = COST_PER_DAY * days;

  if (days >= LONG_TERM) {
    return COST_TOTAL_RENT - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return COST_TOTAL_RENT - SHORT_TERM_DISCOUNT;
  }

  return COST_TOTAL_RENT;
}

module.exports = calculateRentalCost;
