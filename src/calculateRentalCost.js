/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const basePrice = 40;

  if (days >= LONG_TERM) {
    return days * basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * basePrice - SHORT_TERM_DISCOUNT;
  }

  return days * basePrice;
}

module.exports = calculateRentalCost;
