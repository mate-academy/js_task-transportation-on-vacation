/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RATE = 40;
const MID_TERM_THRESHOLD = 3;
const LONG_TERM_THRESHOLD = 7;
const MID_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  let total = days * DAILY_RATE;

  if (days >= LONG_TERM_THRESHOLD) {
    total -= LONG_TERM_DISCOUNT;
  } else if (days >= MID_TERM_THRESHOLD) {
    total -= MID_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;

// mudanças realizadas
