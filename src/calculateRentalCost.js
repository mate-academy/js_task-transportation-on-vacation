/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE_PER_DAY = 40;
  const BASIC_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const basePrice = days * BASE_PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return basePrice - BASIC_DISCOUNT; //
  }

  return basePrice;
}

module.exports = calculateRentalCost;
