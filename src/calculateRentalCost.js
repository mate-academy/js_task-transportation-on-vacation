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
  const PRICE_PER_DAY = 40;

  const result = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return result - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return result - SHORT_TERM_DISCOUNT;
  }

  return result;
}

module.exports = calculateRentalCost;
