/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days < SHORT_TERM) {
    return days * basePrice;
  }

  if (days >= LONG_TERM) {
    return days * basePrice - LONG_TERM_DISCOUNT;
  }

  return days * basePrice - SHORT_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
