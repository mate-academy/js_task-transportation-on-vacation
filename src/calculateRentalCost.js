/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PRICE_PER_DAY = 40;
  const LONG_RENT_TERM = 7;
  const LONG_RENT_TERM_DISCOUNT = 50;
  const SHORT_RENT_TERM = 3;
  const SHORT_RENT_TERM_DISCOUNT = 20;

  const basePrice = days * RENT_PRICE_PER_DAY;

  if (days >= LONG_RENT_TERM) {
    return basePrice - LONG_RENT_TERM_DISCOUNT;
  }

  if (days >= SHORT_RENT_TERM) {
    return basePrice - SHORT_RENT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
