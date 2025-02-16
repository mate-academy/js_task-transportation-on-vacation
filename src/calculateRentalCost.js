/**
 * @param {number} days
 *
 * @return {number}
 */
const COST_ONE_DAY_IN_DOLLARS = 40;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const SUM_RENT = COST_ONE_DAY_IN_DOLLARS * days;

  if (days >= LONG_TERM) {
    return SUM_RENT - LONG_TERM_DISCOUNT;
  } else if (days <= LONG_TERM && days >= SHORT_TERM) {
    return SUM_RENT - SHORT_TERM_DISCOUNT;
  }

  return SUM_RENT;
}

module.exports = calculateRentalCost;
