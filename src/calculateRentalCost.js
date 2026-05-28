/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST = 40;
  const PRICE = days * COST;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return PRICE - SHORT_TERM_DISCOUNT;
  }

  return PRICE;
}

module.exports = calculateRentalCost;
