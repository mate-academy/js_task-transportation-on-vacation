/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const SHORT_TERM = 3;
  const DISCOUNT_FOR_SHORT_TERM = 20;
  const LONG_TERM = 7;
  const DISCOUNT_FOR_LONG_TERM = 50;

  const TOTAL_COST = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return TOTAL_COST - DISCOUNT_FOR_LONG_TERM;
  }

  if (days >= SHORT_TERM) {
    return TOTAL_COST - DISCOUNT_FOR_SHORT_TERM;
  }

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
