/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_FOR_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DIDCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const basePrice = days * PRICE_FOR_DAY;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DIDCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
