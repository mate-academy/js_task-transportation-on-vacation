/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_PRICE = 40;
  const LONG_TIME = 7;
  const LONG_TIME_DISCOUNT = 50;
  const SHORT_TIME = 3;
  const SHORT_TIME_DISCOUNT = 20;

  const basePrice = days * DAY_PRICE;

  if (days >= LONG_TIME) {
    return basePrice - LONG_TIME_DISCOUNT;
  }

  if (days >= SHORT_TIME) {
    return basePrice - SHORT_TIME_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
