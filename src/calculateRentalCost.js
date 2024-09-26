/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40 * days;
  const LONG_PERIOD = 7;
  const LONG_PERIOD_DISCOUNT = 50;
  const SHORT_PERIOD = 3;
  const SHORT_PERIOD_DISCOUNT = 20;

  if (days >= LONG_PERIOD) {
    return PRICE_PER_DAY - LONG_PERIOD_DISCOUNT;
  }

  if (days >= SHORT_PERIOD) {
    return PRICE_PER_DAY - SHORT_PERIOD_DISCOUNT;
  }

  return PRICE_PER_DAY;
}

module.exports = calculateRentalCost;
