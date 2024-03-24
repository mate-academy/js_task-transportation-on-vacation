/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;

  const SHORT_DAYS = 3;
  const SHORT_DAYS_DISC = 20;

  const LONG_DAYS = 7;
  const LONG_DAYS_DISC = 50;

  const cost = days * PRICE_PER_DAY;

  if (days >= LONG_DAYS) {
    return cost - LONG_DAYS_DISC;
  }

  if (days >= SHORT_DAYS) {
    return cost - SHORT_DAYS_DISC;
  }

  return cost;
}

module.exports = calculateRentalCost;
