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
  const PRICE_A_DAY = 40;
  const RESULT_COST = PRICE_A_DAY * days;

  if (days >= LONG_TERM) {
    return RESULT_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return RESULT_COST - SHORT_TERM_DISCOUNT;
  }

  return RESULT_COST;
}

module.exports = calculateRentalCost;
