/**
 * @param {number} term
 *
 * @return {number}
 */

const SHORT_TERM = 3;
const LONG_TERM = 7;
const BASE_DAILY_RATE = 40;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(term) {
  if (term < SHORT_TERM) {
    return term * BASE_DAILY_RATE;
  }

  if (term < LONG_TERM) {
    return term * BASE_DAILY_RATE - SHORT_TERM_DISCOUNT;
  }

  if (term >= LONG_TERM) {
    return term * BASE_DAILY_RATE - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
