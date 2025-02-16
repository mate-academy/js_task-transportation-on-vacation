/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const SHORT_PERIOD = 3;
  const SHORT_PERIOD_DISCOUNT = 20;
  const LONG_PERIOD = 7;
  const LONG_PERIOD_DISCOUNT = 50;

  const totalSum = days * PRICE_PER_DAY;

  if (days >= LONG_PERIOD) {
    return totalSum - LONG_PERIOD_DISCOUNT;
  }

  if (days >= SHORT_PERIOD) {
    return totalSum - SHORT_PERIOD_DISCOUNT;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
