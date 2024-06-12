/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_DISCOUNT = 50;
  const SHORT_DISCOUNT = 20;

  const TOTAL_PRICE = days * COST_PER_DAY;

  if (days >= LONG_TERM) {
    return TOTAL_PRICE - LONG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return TOTAL_PRICE - SHORT_DISCOUNT;
  }

  return TOTAL_PRICE;
}

module.exports = calculateRentalCost;
