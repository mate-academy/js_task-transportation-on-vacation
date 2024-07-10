/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40 * days;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SMALL_TERM = 3;
  const SMALL_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SMALL_TERM) {
    return basePrice - SMALL_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
