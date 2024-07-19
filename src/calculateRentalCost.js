/*
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TIME = 7;
  const LONG_TIME_DISCOUNT = 50;
  const SHORT_TIME = 3;
  const SHORT_TIME_DISCOUNT = 20;

  const basePrice = days * PRICE_PER_DAY;

  if (days < SHORT_TIME) {
    return basePrice;
  } if (days >= SHORT_TIME && days < LONG_TIME) {
    return basePrice - SHORT_TIME_DISCOUNT;
  } else {
    return basePrice - LONG_TIME_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
