/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const basicPrice = DAILY_PRICE * days;

  if (days >= LONG_TERM) {
    return basicPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basicPrice - SHORT_TERM_DISCOUNT;
  }

  return basicPrice;
}

module.exports = calculateRentalCost;
