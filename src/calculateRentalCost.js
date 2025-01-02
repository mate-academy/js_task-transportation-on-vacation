/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const BASE_PRICE = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days < SHORT_TERM) {
    return BASE_PRICE * days;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return BASE_PRICE * days - SHORT_TERM_DISCOUNT;
  }

  return BASE_PRICE * days - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
