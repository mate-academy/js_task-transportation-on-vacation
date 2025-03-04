/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;
  const LONG_PERIOD = 7;
  const SHORT_PERIOD = 3;
  const LONG_PERIOD_DISCOUNT = 50;
  const SHORT_PERIOD_DISCOUNT = 20;
  const basicRent = RENT_PER_DAY * days;

  if (days >= LONG_PERIOD) {
    return basicRent - LONG_PERIOD_DISCOUNT;
  }

  if (days >= SHORT_PERIOD) {
    return basicRent - SHORT_PERIOD_DISCOUNT;
  }

  return basicRent;
}

module.exports = calculateRentalCost;
