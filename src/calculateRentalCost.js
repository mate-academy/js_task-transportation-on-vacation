/**
 * @param {number} days
 *
 * @return {number}
 */

const PRICE = 40;
const LONG_TERM = 7;
const SHORT_TERM = 3;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const RESULT = PRICE * days;

  if (days >= LONG_TERM) {
    return RESULT - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return RESULT - SHORT_TERM_DISCOUNT;
  }

  return RESULT;
}

module.exports = calculateRentalCost;
