/**
 * @param {number} days
 *
 * @return {number}
 */

const LONG_TERM = 7;
const SHORT_TERM = 3;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return days * 40 - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    return days * 40 - SHORT_TERM_DISCOUNT;
  }

  return days * 40;
}

module.exports = calculateRentalCost;
