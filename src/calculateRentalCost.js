/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const COST_ONE_DAY = 40;

  if (days >= LONG_TERM) {
    return COST_ONE_DAY * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return COST_ONE_DAY * days - SHORT_TERM_DISCOUNT;
  }

  return COST_ONE_DAY * days;
}

module.exports = calculateRentalCost;
