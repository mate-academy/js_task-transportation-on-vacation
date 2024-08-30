/**
 * @param {number} days
 *
 * @return {number}
 */
const PRICE_FOR_DAY = 40;
const SHORT_TERM = 3;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return PRICE_FOR_DAY * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return PRICE_FOR_DAY * days - SHORT_TERM_DISCOUNT;
  }

  return PRICE_FOR_DAY * days;
}

module.exports = calculateRentalCost;
