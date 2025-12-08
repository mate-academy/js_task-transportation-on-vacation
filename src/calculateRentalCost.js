/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const DAY_COST = 40;
  const LONG_PERIOD = 7;
  const SHORT_PERIOD = 3;
  const LONG_PERIOD_DISCOUNT = 50;
  const SHORT_PERIOD_DISCOUNT = 20;

  const basicPrice = days * DAY_COST;

  if (days >= LONG_PERIOD) {
    return basicPrice - LONG_PERIOD_DISCOUNT;
  }

  if (days >= SHORT_PERIOD) {
    return basicPrice - SHORT_PERIOD_DISCOUNT;
  }

  return basicPrice;
}

module.exports = calculateRentalCost;
