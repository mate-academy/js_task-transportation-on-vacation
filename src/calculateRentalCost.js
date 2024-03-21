/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COSTS = 40;
  const LONG_TERM = 7;
  const BIG_OFF = 50;
  const SHORT_TERM = 3;
  const SMALL_OFF = 20;
  const value = days * RENT_COSTS;

  if (days >= LONG_TERM) {
    return value - BIG_OFF;
  }

  if (days >= SHORT_TERM) {
    return value - SMALL_OFF;
  }

  return value;
}

module.exports = calculateRentalCost;
