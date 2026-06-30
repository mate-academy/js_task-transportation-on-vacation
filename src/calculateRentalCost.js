/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const SHORT_TERM_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const totalCost = COST_PER_DAY * days;

  if (days >= SHORT_TERM_DAYS && days < LONG_TERM_DAYS) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM_DAYS) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
