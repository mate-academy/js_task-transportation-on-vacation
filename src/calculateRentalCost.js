/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const ONE_DAY_COST = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return ONE_DAY_COST * days - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return ONE_DAY_COST * days - LONG_TERM_DISCOUNT;
  }

  return ONE_DAY_COST * days;
}

module.exports = calculateRentalCost;
