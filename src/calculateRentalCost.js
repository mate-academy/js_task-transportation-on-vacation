/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const CALC_COUNT = PRICE_PER_DAY * days;
  const SAIL_FOR_THREE_MORE = 20;
  const SAIL_FOR_SEVEN_MORE  = 50;
  const LONG_PERIOD = 7;
  const SHORT_PERIOD = 3;

  if (days >= LONG_PERIOD) {
    return CALC_COUNT - SAIL_FOR_SEVEN_MORE;
  }

  if (days >= SHORT_PERIOD) {
    return CALC_COUNT - SAIL_FOR_THREE_MORE;
  }

  if (days > 0) {
    return CALC_COUNT;
  }
}

module.exports = calculateRentalCost;
