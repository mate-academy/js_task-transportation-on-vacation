/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE = 40;
  const LOW_RENT_TERM = 3;
  const LONG_RENT_TERM = 7;
  const LOW_RENT_TERM_DISCOUNT = 20;
  const LONG_RENT_TERM_DISCOUNT = 50;
  const basePrice = PRICE * days;

  if (days >= LONG_RENT_TERM) {
    return basePrice - LONG_RENT_TERM_DISCOUNT;
  }

  if (days >= LOW_RENT_TERM) {
    return basePrice - LOW_RENT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
