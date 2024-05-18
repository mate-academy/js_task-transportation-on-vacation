/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_DAY = 40;
  const LONG_TERM = 7;
  const SALE_LONG_TERM = 50;
  const SHORT_TERM = 3;
  const SALE_SHORT_TERM = 20;
  const BASE_PRICE = days * PRICE_DAY;
  if (days >= LONG_TERM) {
    return BASE_PRICE - SALE_LONG_TERM;
  }
  if (days >= SHORT_TERM) {
    return BASE_PRICE - SALE_SHORT_TERM;
  }
  return BASE_PRICE;
}
module.exports = calculateRentalCost;
