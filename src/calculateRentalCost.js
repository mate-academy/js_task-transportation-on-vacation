/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const PRICE_PER_DAY = 40;

  const SMALL_TERM = 3;
  const SMALL_TERM_DISCOUNT = 20;
  const basePrice = days * PRICE_PER_DAY;

  if (LONG_TERM <= days) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (SMALL_TERM <= days && days <= LONG_TERM) {
    return basePrice - SMALL_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
