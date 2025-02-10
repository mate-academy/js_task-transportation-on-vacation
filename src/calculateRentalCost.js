/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const PRICE_IN_DAY = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  const price = PRICE_IN_DAY * days;

  if (days < SHORT_TERM) {
    return price;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return price - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return price - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
