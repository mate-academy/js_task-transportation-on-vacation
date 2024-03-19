/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DICOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DICOUNT = 20;

  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DICOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - SHORT_TERM_DICOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
