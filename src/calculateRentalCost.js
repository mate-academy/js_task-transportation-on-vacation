/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const BASIC_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  const basePrice = PRICE_PER_DAY * days;

  if (days >= 3 && days <= 6) {
    return basePrice - BASIC_DISCOUNT;
  }

  if (days >= 7) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
