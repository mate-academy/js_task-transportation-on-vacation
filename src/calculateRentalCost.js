/**
 * @param {number} days
 *
 * @return {number}
 */

const LONG_TERM = 7;
const SHORT_TERM = 3;
const LONG_TERM_DISCOUNT = 30;
const SHORT_TERM_DISCOUNT = 20;
const DAILY_RATE = 40;

function calculateRentalCost(days) {
  // write code here

  let total = DAILY_RATE * days;

  if (days >= LONG_TERM) {
    total -= LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    total -= SHORT_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
