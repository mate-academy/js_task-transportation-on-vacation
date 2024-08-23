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

  return days >= LONG_TERM
    ? days * COST_PER_DAY - LONG_PERIOD_DISCOUNT
    : days >= SHORT_TERM
      ? days * COST_PER_DAY - SHORT_PERIOD_DISCOUNT
      : days * COST_PER_DAY;
}

module.exports = calculateRentalCost;
