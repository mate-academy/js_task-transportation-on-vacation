/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_PERIOD_DISCOUNT = 50;
  const SHORT_PERIOD_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return days * COST_PER_DAY - LONG_PERIOD_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * COST_PER_DAY - SHORT_PERIOD_DISCOUNT;
  }

  return days * COST_PER_DAY;
}

module.exports = calculateRentalCost;
