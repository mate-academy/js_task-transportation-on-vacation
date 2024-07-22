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

  const RENT_COST = 40;

  const RESULT = days * RENT_COST;

  if (days >= LONG_TERM) {
    return RESULT - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return RESULT - SHORT_TERM_DISCOUNT;
  }

  return RESULT;
}

module.exports = calculateRentalCost;
