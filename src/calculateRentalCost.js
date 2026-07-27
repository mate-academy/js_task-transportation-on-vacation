/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RATE = 40;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_DISCOUNT = 20;
const LONG_TERM = 7;
const MID_TERM = 3;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return days * DAILY_RATE - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return days * DAILY_RATE - MID_TERM_DISCOUNT;
  }

  return days * DAILY_RATE;
}

module.exports = calculateRentalCost;
