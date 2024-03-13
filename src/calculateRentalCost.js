/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CAR_COSTS = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const commonPrice = days * CAR_COSTS;

  if (days >= LONG_TERM) {
    return commonPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return commonPrice - SHORT_TERM_DISCOUNT;
  }

  return commonPrice;
}

module.exports = calculateRentalCost;
