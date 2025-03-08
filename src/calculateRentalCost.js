/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_COST = 40;
  const SHORT_TERM = 3;
  const DISCOUNT_SHORT_TERM = 20;
  const LONG_TERM = 7;
  const DISCOUNT_LONG_TERM = 50;

  const PRICE = days * DAY_COST;

  if (days >= LONG_TERM) {
    return PRICE - DISCOUNT_LONG_TERM;
  }

  if (days >= SHORT_TERM) {
    return PRICE - DISCOUNT_SHORT_TERM;
  }

  return PRICE;
}

module.exports = calculateRentalCost;
