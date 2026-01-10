/**
 * @param {number} days
 *
 * @return {number}
 */

const PRICE_PER_DAY = 40;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM = 3;
const LONG_TERM = 7;

function calculateRentalCost(days) {
  if (days < SHORT_TERM) {
    return PRICE_PER_DAY * days;
  }

  if (days < LONG_TERM) {
    return PRICE_PER_DAY * days - SHORT_TERM_DISCOUNT;
  }

  return PRICE_PER_DAY * days - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
