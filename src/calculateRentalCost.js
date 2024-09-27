/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const ONE_DAY_RENT = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const basePrice = days * ONE_DAY_RENT;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT;
  } else {
    return basePrice;
  }
}

module.exports = calculateRentalCost;
