/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let basePrice = days * 40;

  if (days >= LONG_TERM) {
    basePrice = basePrice - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    basePrice = basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}
module.exports = calculateRentalCost;
