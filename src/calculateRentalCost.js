/**
 * @param {number} days
 *
 * @return {number}
 *
 */

function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const SHORT_TERM = 3;
  const TOTAL_COST = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    return days * DAILY_RATE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * DAILY_RATE - SHORT_TERM_DISCOUNT;
  }

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
