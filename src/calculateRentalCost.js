/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const basePrice = 40;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;

  if (days >= 7) {
    return basePrice * days - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return basePrice * days - MEDIUM_TERM_DISCOUNT;
  }

  return basePrice * days;
}

module.exports = calculateRentalCost;
