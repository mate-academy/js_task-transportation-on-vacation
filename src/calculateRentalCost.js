/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CAR_PRICE = 40;
  const SHORT_PERIOD = 3;
  const SHORT_PERIOD_DISCOUNT = 20;
  const LONG_PERIOD = 7;
  const LONG_PERIOD_DISCOUNT = 50;

  if (days >= LONG_PERIOD) {
    return days * CAR_PRICE - LONG_PERIOD_DISCOUNT;
  }

  if (days >= SHORT_PERIOD) {
    return days * CAR_PRICE - SHORT_PERIOD_DISCOUNT;
  }

  return days * CAR_PRICE;
}

module.exports = calculateRentalCost;
