/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const ONE_DAY_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const price = days * ONE_DAY_PRICE;

  if (days >= LONG_TERM) {
    return price - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return price - SHORT_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
