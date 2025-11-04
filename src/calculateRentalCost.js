/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return days * basePrice - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return days * basePrice - LONG_TERM_DISCOUNT;
  }

  return days * basePrice;
}

module.exports = calculateRentalCost;
