/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const COSTS_PER_DAY = 40;

  const totalSum = COSTS_PER_DAY * days;

  if (days >= LONG_TERM) {
    return totalSum - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalSum - SHORT_TERM_DISCOUNT;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
