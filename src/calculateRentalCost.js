/**
 * @param {number} days
 *
 * @return {number}
 */

const DAY_RENT = 40;
const LONG_TERM = 7;
const SHORT_TERM = 3;
const LONG_TERM_DISCOUNT = -50;
const SHORT_TERM_DISCOUNT = -20;

function calculateRentalCost(days) {
  const TOTAL_RENT = DAY_RENT * days;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return TOTAL_RENT + SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return TOTAL_RENT + LONG_TERM_DISCOUNT;
  }

  return TOTAL_RENT;
}

module.exports = calculateRentalCost;
