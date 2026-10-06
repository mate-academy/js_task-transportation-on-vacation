/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_DISCOUNT = 20;
  const LONG_DISCOUNT = 50;

  const totalCost = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    return totalCost - LONG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalCost - SHORT_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
