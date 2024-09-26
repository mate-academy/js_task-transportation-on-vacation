/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  const basePrice = days * PRICE_PER_DAY;

  if (days >= 7) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  if (days < 3) {
    return basePrice;
  }
}

module.exports = calculateRentalCost;
