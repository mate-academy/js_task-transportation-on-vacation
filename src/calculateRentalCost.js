/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_DAY = 40;
  const TOTAL_COST = days * COST_DAY;

  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  const SHORT_TERM_SALE = 20;
  const LONG_TERM_SALE = 50;

  if (days >= LONG_TERM) {
    return TOTAL_COST - LONG_TERM_SALE;
  }

  if (days >= SHORT_TERM) {
    return TOTAL_COST - SHORT_TERM_SALE;
  }

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
