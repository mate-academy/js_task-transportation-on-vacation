/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONE_DAY_COST = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  const DEFAULT_PRICE = ONE_DAY_COST * days;

  if (days >= LONG_TERM) {
    return DEFAULT_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return DEFAULT_PRICE - SHORT_TERM_DISCOUNT;
  }

  return DEFAULT_PRICE;
}

module.exports = calculateRentalCost;
