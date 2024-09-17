/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const DAILY_RATE = 40;

  const totalCost = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
