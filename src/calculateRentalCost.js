/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST_PER_DAY = 40;
  const LONG_TERM_DURATION = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DURATION = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const totalCost = RENT_COST_PER_DAY * days;

  if (days >= LONG_TERM_DURATION) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_DURATION) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
