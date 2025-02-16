/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CAR_RENT_COST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const RENT_COST_ALL_TERM = days * CAR_RENT_COST;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return RENT_COST_ALL_TERM - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return RENT_COST_ALL_TERM - LONG_TERM_DISCOUNT;
  }

  return RENT_COST_ALL_TERM;
}

module.exports = calculateRentalCost;
