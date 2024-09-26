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

  const RENTAL_COST_PER_DAY = 40;
  const TOTAL_COST = RENTAL_COST_PER_DAY * days;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return TOTAL_COST - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return TOTAL_COST - LONG_TERM_DISCOUNT;
  }

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
