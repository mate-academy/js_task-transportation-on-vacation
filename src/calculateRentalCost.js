/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const PRICE_PER_DAY = 40;
  const basePrice = PRICE_PER_DAY * days;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days < SHORT_TERM) {
    return basePrice;
  }

  if (days < LONG_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
