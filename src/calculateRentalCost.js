/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const SHORT_TERM_SALE = 20;
  const LONG_TERM_SALE = 50;
  const RENT_PRICE = 40;
  const BASE_PRICE = days * RENT_PRICE;

  if (days >= LONG_TERM) {
    return BASE_PRICE - LONG_TERM_SALE;
  }

  if (days >= SHORT_TERM) {
    return BASE_PRICE - SHORT_TERM_SALE;
  }

  return BASE_PRICE;
}

module.exports = calculateRentalCost;
