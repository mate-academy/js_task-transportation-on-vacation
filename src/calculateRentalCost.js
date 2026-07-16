const DAILY_RATE = 40;
const SHORT_TERM_DAYS = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = days * DAILY_RATE;

  if (days >= LONG_TERM_DAYS) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_DAYS) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
