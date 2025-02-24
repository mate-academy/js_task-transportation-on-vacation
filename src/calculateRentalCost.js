/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  const basePrice = 40 * days;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return basePrice - MEDIUM_TERM_DISCOUNT;
  }

  return 80;
}

module.exports = calculateRentalCost;
