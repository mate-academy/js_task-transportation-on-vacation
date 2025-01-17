/**
 * @param {number} days
 *
 * @return {number}
 */

const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;
const RENT = 40;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return RENT * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return RENT * days - SHORT_TERM_DISCOUNT;
  }

  return RENT * days;
}

module.exports = calculateRentalCost;
