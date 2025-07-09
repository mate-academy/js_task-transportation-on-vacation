/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CAR_PRICE_PER_DAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const finalPrice = days * CAR_PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return finalPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return finalPrice - SHORT_TERM_DISCOUNT;
  }

  return finalPrice;
}
module.exports = calculateRentalCost;
