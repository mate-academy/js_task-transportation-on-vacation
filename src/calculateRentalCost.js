/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const LONG_PERIOD = 7;
  const LONG_PERIOD_DISCOUNT = 50;
  const SHORT_PERIOD = 3;
  const SHORT_PERIOD_DISCOUNT = 20;
  const BASE_PRICE = 40;

  const totalPrice = days * BASE_PRICE;

  if (days >= LONG_PERIOD) {
    return totalPrice - LONG_PERIOD_DISCOUNT;
  }

  if (days >= SHORT_PERIOD) {
    return totalPrice - SHORT_PERIOD_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
