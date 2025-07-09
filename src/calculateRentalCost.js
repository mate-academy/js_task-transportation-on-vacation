/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RATE = 40;
const LONG_TERM = 7;
const MEDIUM_TERM = 3;
const MEDIUM_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  const calc = DAILY_RATE * days;

  if (days <= 0) {
    return 0;
  }

  if (days >= LONG_TERM) {
    return calc - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return calc - MEDIUM_TERM_DISCOUNT;
  }

  return calc;
}

module.exports = calculateRentalCost;
