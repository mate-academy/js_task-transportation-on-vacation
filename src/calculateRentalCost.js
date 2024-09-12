/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const SHORT_TERM = 3;
  const DISCOUNT_SHORT_TERM = 20;
  const LONG_TERM = 7;
  const DISCOUNT_LONG_TERM = 50;

  const basePrice = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    return basePrice - DISCOUNT_LONG_TERM;
  }

  if (days >= SHORT_TERM) {
    return basePrice - DISCOUNT_SHORT_TERM;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
