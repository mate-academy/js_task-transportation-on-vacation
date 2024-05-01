/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_FOR_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISC = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_TERM_DISC = 20;

  const basicPrice = days * PRICE_FOR_DAY;

  if (days >= LONG_TERM) {
    return basicPrice - LONG_TERM_DISC;
  }

  if (days >= SHORT_TERM) {
    return basicPrice - SHORT_TERM_TERM_DISC;
  }

  return basicPrice;
}

module.exports = calculateRentalCost;
