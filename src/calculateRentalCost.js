/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_COST_PER_DAY = 40;
  const DAILY_DISCOUNT_FOR_LONG_TERM = 50;
  const DAILY_DISCOUNT_FOR_SHORT_TERM = 20;
  const LONG_TERM_PERIOD = 7;
  const SHORT_TERM_PERIOD = 3;

  const totalCost = days * BASE_COST_PER_DAY;

  if (days >= LONG_TERM_PERIOD) {
    return totalCost - DAILY_DISCOUNT_FOR_LONG_TERM;
  }

  if (days >= SHORT_TERM_PERIOD) {
    return totalCost - DAILY_DISCOUNT_FOR_SHORT_TERM;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
