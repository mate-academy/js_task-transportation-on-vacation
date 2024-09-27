/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DIS = 50;
  const SHORT_TERM_DIS = 20;

  const defaultPrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return defaultPrice - LONG_TERM_DIS;
  }

  if (days >= SHORT_TERM) {
    return defaultPrice - SHORT_TERM_DIS;
  }

  return defaultPrice;
}

module.exports = calculateRentalCost;
