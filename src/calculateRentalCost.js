/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const COST_PER_DAY = 40;
  const SHORT_DISCOUNT = 20;
  const LONG_DISCOUNT = 50;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;

  const COST_PER_VACATION = COST_PER_DAY * days;

  if (days >= LONG_TERM) return COST_PER_VACATION - LONG_DISCOUNT;
  if (days >= SHORT_TERM) return COST_PER_VACATION - SHORT_DISCOUNT;
  return COST_PER_VACATION;
}

module.exports = calculateRentalCost;
