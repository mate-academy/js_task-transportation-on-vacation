/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = days * 40;
  const LONG_TERM = 7;
  const LONG_TERM_PRICE = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_PRICE = 20;

  if (days >= LONG_TERM) {
    return PRICE - LONG_TERM_PRICE;
  }

  if (days >= SHORT_TERM) {
    return PRICE - SHORT_TERM_PRICE;
  }

  return PRICE;
}

module.exports = calculateRentalCost;
