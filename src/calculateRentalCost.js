/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_COST = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DICOUNT = 50;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;

  if (days < SHORT_TERM) {
    return BASE_COST * days;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return BASE_COST * days - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return BASE_COST * days - LONG_TERM_DICOUNT;
  }
}

module.exports = calculateRentalCost;
