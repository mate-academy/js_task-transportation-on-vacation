/**
 * @param {number} days
 *
 * @return {number}
 */

const RENTAL_COST_PER_DAY = 40;
const LONG_TERM = 7;
const MID_TERM = 3;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  // write code here
  let sum = 0;

  if (days < 0) {
    return 0;
  }

  sum = days * RENTAL_COST_PER_DAY;

  if (days >= LONG_TERM) {
    return sum - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return sum - MID_TERM_DISCOUNT;
  }

  return sum;
}

module.exports = calculateRentalCost;
