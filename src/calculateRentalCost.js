/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_CAR_PER_DAY = 40;
  const LONG_PERIOD = 7;
  const DISCOUNT_FOR_LONG_PERIOD = 50;
  const SHORT__PERIOD = 3;
  const DISCOUNT_FOR_SHORT_PERIOD = 20;

  if (days >= LONG_PERIOD) {
    return days * PRICE_CAR_PER_DAY - DISCOUNT_FOR_LONG_PERIOD;
  }

  if (days >= SHORT__PERIOD) {
    return days * PRICE_CAR_PER_DAY - DISCOUNT_FOR_SHORT_PERIOD;
  }

  return days * PRICE_CAR_PER_DAY;
}

module.exports = calculateRentalCost;
