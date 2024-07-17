/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const basePrice = days * PRICE_PER_DAY;

  if (days < SHORT_TERM) {
    return basePrice;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return basePrice - SMALL_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return basePrice - BIG_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
