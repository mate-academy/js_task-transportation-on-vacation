/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHIRT_TERM = 3;
  const SHIRT_TERM_DISCOUNT = 20;

  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHIRT_TERM) {
    return basePrice - SHIRT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
