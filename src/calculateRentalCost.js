/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const SUM = days * PRICE_PER_DAY;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return SUM - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return SUM - SHORT_TERM_DISCOUNT;
  }

  return SUM;
}

module.exports = calculateRentalCost;
