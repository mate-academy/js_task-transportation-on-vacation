/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_PRICE = 40;
  const LONG_PERIOD = 7;
  const LONG_PERIOD_DISCOUNT = 50;
  const SHORT_PERIOD = 3;
  const SHORT_PERIOD_DISCOUNT = 20;

  const totalPrice = days * DAY_PRICE;

  if (days >= LONG_PERIOD) {
    return totalPrice - LONG_PERIOD_DISCOUNT;
  }

  if (days >= SHORT_PERIOD) {
    return totalPrice - SHORT_PERIOD_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
