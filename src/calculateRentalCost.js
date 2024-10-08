/**
 * @param {number} days
 *
 * @return {number}
 */
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;
const DAILY_RATE = 40;
const LONG_TERM_DURATION = 7;
const SHORT_TERM_DURATION = 3;

function calculateRentalCost(days) {
  const totalCost = days * DAILY_RATE;

  if (days >= LONG_TERM_DURATION) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_DURATION) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
