/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const SHORT_TIME_DISCOUNT_RATE = 20;
  const LONG_TIME_DISCOUNT_RATE = 50;
  const totalCost = DAILY_RATE * days;

  if (days >= 7) {
    return totalCost - LONG_TIME_DISCOUNT_RATE;
  }

  if (days >= 3 && days < 7) {
    return totalCost - SHORT_TIME_DISCOUNT_RATE;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
