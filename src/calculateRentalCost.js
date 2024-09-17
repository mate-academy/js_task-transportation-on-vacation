/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const basePrice = days * dayPrice;

  if (days < SHORT_TERM) {
    return basePrice;
  }

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  return basePrice - SHORT_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
