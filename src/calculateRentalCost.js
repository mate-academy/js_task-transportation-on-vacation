/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const BIG_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SMALL_DISCOUNT = 20;

  const total = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return total - BIG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return total - SMALL_DISCOUNT;
  }

  return total;
}
module.exports = calculateRentalCost;
