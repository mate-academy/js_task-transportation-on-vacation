/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DEY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const TOTAL_AMOUND_BASE = PRICE_PER_DEY * days;

  if (days >= LONG_TERM) {
    return TOTAL_AMOUND_BASE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return TOTAL_AMOUND_BASE - SHORT_TERM_DISCOUNT;
  }

  return TOTAL_AMOUND_BASE;
}

module.exports = calculateRentalCost;
