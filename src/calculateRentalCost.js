/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_DISCOUNT = 20;
  const PRICE_PER_DAY = 40;
  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - LONG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - SHORT_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
