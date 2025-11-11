/**
 * @param {number} days
 *
 *
 * @return {number}
 */
const SMALL_TERM = 3;
const LONG_TERM = 7;
const DAILY_RATE = 40;
const MEDIUM_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return days * DAILY_RATE - LONG_TERM_DISCOUNT;
  }

  if (days >= SMALL_TERM) {
    return days * DAILY_RATE - MEDIUM_TERM_DISCOUNT;
  }

  return days * DAILY_RATE;
}

module.exports = calculateRentalCost;
