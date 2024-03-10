/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;
  const rentalCost = 40;
  const basePrice = rentalCost * days;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return basePrice - MIDDLE_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
