/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_PERIOD = 7;
  const LONG_PERIOD_DISCOUNT = 50;
  const SHORT_PERIOD = 3;
  const SHORT_PERIOD_DISCOUNT = 20;
  const price = days * PRICE_PER_DAY;

  if (days >= LONG_PERIOD) {
    return price - LONG_PERIOD_DISCOUNT;
  }

  if (days >= SHORT_PERIOD) {
    return price - SHORT_PERIOD_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
