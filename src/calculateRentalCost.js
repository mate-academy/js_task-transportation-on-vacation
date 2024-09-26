/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const standartPrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return standartPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return standartPrice - SHORT_TERM_DISCOUNT;
  }

  return standartPrice;
}

module.exports = calculateRentalCost;
