/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST_PER_DAY = 40;
  const LONG_TERM_RENT_MIN_DAYS = 7;
  const LONG_TERM_RENT_DISCOUNT = 50;
  const SHORT_TERM_RENT_MIN_DAYS = 3;
  const SHORT_TERM_RENT_DISCOUNT = 20;

  const basePrice = days * RENT_COST_PER_DAY;

  if (days >= LONG_TERM_RENT_MIN_DAYS) {
    return basePrice - LONG_TERM_RENT_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENT_MIN_DAYS) {
    return basePrice - SHORT_TERM_RENT_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
