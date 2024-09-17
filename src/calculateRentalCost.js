/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  let totalPrice = days * DAILY_PRICE;

  if (days < SHORT_TERM) {
    return totalPrice;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return totalPrice - SHORT_TERM_DISCOUNT;
  }

  return totalPrice - LONG_TERM_DISCOUNT;
}
module.exports = calculateRentalCost;
