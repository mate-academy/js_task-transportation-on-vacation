/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dayPrice = 40;
  const basePrice = days * dayPrice;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days < SHORT_TERM) {
    return basePrice;
  }

  if (days < LONG_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
