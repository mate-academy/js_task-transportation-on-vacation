/**
 * @param {number} days
 *
 * @return {number}
 */
const RENT_PER_DAY = 40;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  // write code here
  if (days >= LONG_TERM) {
    return days * RENT_PER_DAY - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * RENT_PER_DAY - SHORT_TERM_DISCOUNT;
  }

  return days * RENT_PER_DAY;
}

module.exports = calculateRentalCost;
