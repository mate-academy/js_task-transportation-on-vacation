/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_MIN_DAYS = 3;
  const LONG_TERM_MIN_DAYS = 7;

  const total = BASE_PRICE * days;

  if (days >= LONG_TERM_MIN_DAYS) {
    return total - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_MIN_DAYS) {
    return total - SHORT_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
