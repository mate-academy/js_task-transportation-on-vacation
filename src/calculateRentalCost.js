/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const RENT_LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const RENT_SHORT_TERM_DISCOUNT = 20;
  let basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - RENT_LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - RENT_SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
