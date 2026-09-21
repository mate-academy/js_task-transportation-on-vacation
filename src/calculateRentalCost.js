/**
 * @param {number} days
 *
 * @return {number}
 */

const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;
const DAILY_RATE = 40;
const SHORT_TERM_DAYS = 3;
const LONG_TERM_DAYS = 7;

function calculateRentalCost(days) {
  const total = days * DAILY_RATE;

  if (days < SHORT_TERM_DAYS) {
    return total;
  }

  if (days >= LONG_TERM_DAYS) {
    return total - LONG_TERM_DISCOUNT;
  }

  return total - SHORT_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
