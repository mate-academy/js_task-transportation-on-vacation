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

  if (days >= LONG_TERM) {
    return basePrice * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice * days - SHORT_TERM_DISCOUNT;
  }

  return basePrice * days;
}

module.exports = calculateRentalCost;
