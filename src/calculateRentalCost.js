/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const baseRentCost = COST_PER_DAY * days;

  if (days >= LONG_TERM) {
    return (baseRentCost - LONG_TERM_DISCOUNT);
  }

  if (days >= SHORT_TERM) {
    return (baseRentCost - SHORT_TERM_DISCOUNT);
  }

  return baseRentCost;
}

module.exports = calculateRentalCost;
