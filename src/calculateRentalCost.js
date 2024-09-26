/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TIME = 7;
  const SHORT_TIME = 3;
  const DISCONT_LONG_TIME = 50;
  const DISCONT_SHORT_TIME = 20;

  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TIME) {
    return basePrice - DISCONT_LONG_TIME;
  }

  if (days >= SHORT_TIME) {
    return basePrice - DISCONT_SHORT_TIME;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
