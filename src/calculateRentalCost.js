/**
 *
 *
 */const DAILY_RATE = 40;

const SHORT_TERM_THRESHOLD = 3;
const SHORT_TERM_DISCOUNT = 20;

const LONG_TERM_THRESHOLD = 7;
const LONG_TERM_DISCOUNT = 50;

/**
 * @param {number} days
 * @return {number}
 */
function calculateRentalCost(days) {
  let total = days * DAILY_RATE;

  if (days >= LONG_TERM_THRESHOLD) {
    total -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM_THRESHOLD) {
    total -= SHORT_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
