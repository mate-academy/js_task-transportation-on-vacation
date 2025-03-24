/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_DAY = 40;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const basePrice = days * COST_DAY;

  if (days >= LONG_TERM) {
    return basePrice - BIG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - SMALL_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
