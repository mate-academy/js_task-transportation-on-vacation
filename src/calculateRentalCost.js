/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_RENT_DISCOUNT = 50;
  const LONG_TERM_RENT_DAYS = 7;
  const SHORT_TERM_RENT_DISCOUNT = 20;
  const SHORT_TERM_RENT_DAYS = 3;

  const basePrice = PRICE_PER_DAY * days;

  if (days >= LONG_TERM_RENT_DAYS) {
    return basePrice - LONG_TERM_RENT_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENT_DAYS) {
    return basePrice - SHORT_TERM_RENT_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
