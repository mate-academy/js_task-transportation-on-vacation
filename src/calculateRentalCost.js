/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const BASE_COST = PRICE_PER_DAY * days;
  const LONG_TERM = 7;
  const MEDIUM_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return BASE_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return BASE_COST - MEDIUM_TERM_DISCOUNT;
  }

  return BASE_COST;
}

module.exports = calculateRentalCost;
