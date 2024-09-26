/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const DAY_COST = 40;
  const TOTAL_COST = days * DAY_COST;

  if (days < SHORT_TERM) {
    return TOTAL_COST;
  }

  if (days < LONG_TERM) {
    return TOTAL_COST - SHORT_TERM_DISCOUNT;
  }

  return TOTAL_COST - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
