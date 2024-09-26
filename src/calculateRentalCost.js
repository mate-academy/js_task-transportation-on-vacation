/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SORT_TERM = 3;
  const SORT_TERM_DISCOUNT = 20;

  let basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SORT_TERM) {
    return basePrice - SORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
