/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RATE = 40;

const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

const MID_TERM = 3;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return DAILY_RATE * days - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return DAILY_RATE * days - MID_TERM_DISCOUNT;
  }

  return DAILY_RATE * days;
}

module.exports = calculateRentalCost;
