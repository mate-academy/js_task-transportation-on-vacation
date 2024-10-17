/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const LONG_TERM = 7;
  const DISCOUNT_LONG_TERM = 50;
  const SHORT_TERM = 3;
  const DISCOUNT_SHORT_TERM = 20;

  const basePrice = 40;

  if (days >= LONG_TERM) {
    return basePrice * days - DISCOUNT_LONG_TERM;
  }

  if (days >= SHORT_TERM) {
    return basePrice * days - DISCOUNT_SHORT_TERM;
  }

  return basePrice * days;
}

module.exports = calculateRentalCost;
