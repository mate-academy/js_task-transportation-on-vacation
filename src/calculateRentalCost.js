/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISC = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISC = 50;

  const basePrice = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISC;
  }

  if (days >= SHORT_TERM) {
    return basePrice - SHORT_TERM_DISC;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
