/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const basePrice = days * PRICE_PER_DAY;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  // No discount
  if (days < SHORT_TERM) {
    return basePrice;
  }

  // 20$ discount
  if (days < LONG_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  // 50$ discount
  return basePrice - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
