/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const SHORT_TERM = 3;
  const SORT_TERM_DISCOUNT = 20;

  const basePrice = days * PRICE_PER_DAY;

  if (days < SHORT_TERM) {
    return basePrice;
  }

  if (days < LONG_TERM) {
    return basePrice - SORT_TERM_DISCOUNT;
  }

  return basePrice - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
