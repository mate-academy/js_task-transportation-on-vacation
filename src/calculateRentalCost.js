/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const RENT_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const BASIS_PRICE = days * RENT_DAY;

  if (days >= LONG_TERM) {
    return BASIS_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return BASIS_PRICE - SHORT_TERM_DISCOUNT;
  }

  return BASIS_PRICE;
}

module.exports = calculateRentalCost;
