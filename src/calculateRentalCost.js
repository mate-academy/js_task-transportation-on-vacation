/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const CAR_COST = 40;
  const COST_FOR_DAYS = days * CAR_COST;

  if (days >= LONG_TERM) {
    return COST_FOR_DAYS - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return COST_FOR_DAYS - SHORT_TERM_DISCOUNT;
  }

  return COST_FOR_DAYS;
}

module.exports = calculateRentalCost;
