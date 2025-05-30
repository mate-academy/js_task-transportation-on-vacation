/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CAR_COSTS = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return days * CAR_COSTS - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return days * CAR_COSTS - LONG_TERM_DISCOUNT;
  }

  return days * CAR_COSTS;
}

module.exports = calculateRentalCost;
