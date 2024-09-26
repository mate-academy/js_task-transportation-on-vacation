/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const COST_PER_DAY = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const basePrice = COST_PER_DAY * days;

  if (days >= LONG_TERM) {
    return basePrice - BIG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - SMALL_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
