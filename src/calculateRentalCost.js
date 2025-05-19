/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const TOTAL_COSTS = PRICE_PER_DAY * days;

  if (days < 0) {
    throw new Error('Number of days cannot be negative');
  }

  if (days >= LONG_TERM) {
    return TOTAL_COSTS - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return TOTAL_COSTS - SHORT_TERM_DISCOUNT;
  }

  return TOTAL_COSTS;
}

module.exports = calculateRentalCost;
