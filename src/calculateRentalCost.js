/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const DISCOUNT_LONG_TERM = 50;
  const DISCOUNT_SHORT_TERM = 20;
  const COST_PER_DAY = 40;

  const totalCost = days * COST_PER_DAY;

  if (days >= LONG_TERM) {
    return totalCost - DISCOUNT_LONG_TERM;
  }

  if (days >= SHORT_TERM) {
    return totalCost - DISCOUNT_SHORT_TERM;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
