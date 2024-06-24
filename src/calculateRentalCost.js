/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const basePrice = 40;
  const DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days < 3) {
    return days * basePrice;
  }

  if (days >= 7) {
    return days * basePrice - LONG_TERM_DISCOUNT;
  }

  return days * basePrice - DISCOUNT;
}

module.exports = calculateRentalCost;
