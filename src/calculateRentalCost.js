/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const SHORT_TERM_DAYS = 3;
  const LONG_TERM_DAYS = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_DAYS) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
