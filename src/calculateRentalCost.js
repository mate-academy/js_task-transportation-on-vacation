/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SMALL_DISCOUNT = 20;
  const LARGE_DISCOUNT = 50;
  const DEFAULT_PRICE = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const NORMAL_PRICE = DEFAULT_PRICE * days;

  if (days >= LONG_TERM) {
    return NORMAL_PRICE - LARGE_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return NORMAL_PRICE - SMALL_DISCOUNT;
  }

  return NORMAL_PRICE;
}

module.exports = calculateRentalCost;
