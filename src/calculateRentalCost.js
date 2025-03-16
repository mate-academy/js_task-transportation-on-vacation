/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TURM = 7;
  const LONG_TURM_DISCOUNT = 50;
  const SHORT_TURM = 3;
  const SHORT_TURM_DISCOUNT = 20;

  const totalPrice = days * PRICE_PER_DAY;

  if (days >= LONG_TURM) {
    return totalPrice - LONG_TURM_DISCOUNT;
  }

  if (days >= SHORT_TURM) {
    return totalPrice - SHORT_TURM_DISCOUNT;
  }

  return totalPrice;
}
module.exports = calculateRentalCost;
