/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = days * 40;

  const SHORT_TERM = 3;
  const MEDIUM_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days < SHORT_TERM) {
    return basePrice;
  }

  if (days < MEDIUM_TERM) {
    return basePrice - 20;
  }

  return basePrice - LONG_TERM_DISCOUNT;
}
module.exports = calculateRentalCost;
