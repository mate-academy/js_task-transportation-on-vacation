/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const PRICE_PER_DAY = 40;
  const LONG_PERIOD = 7;
  const LONG_PERIOD_DISCOUNT = 50;
  const SHORT_PERIOD = 3;
  const SHORT_PERIOD_DISCOUNT = 20;

  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_PERIOD) {
    return basePrice - LONG_PERIOD_DISCOUNT;
  }

  if (days >= SHORT_PERIOD) {
    return basePrice - SHORT_PERIOD_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
