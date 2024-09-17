/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SEVEN_DAY_DISCOUNT = 50;
  const THREE_DAY_DISCOUNT = 20;
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - SEVEN_DAY_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - THREE_DAY_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
