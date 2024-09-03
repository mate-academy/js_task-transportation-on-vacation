/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const TOTAL__PRICE = days * 40;

  if (days >= LONG_TERM) {
    return TOTAL__PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return TOTAL__PRICE - SHORT_TERM_DISCOUNT;
  }

  return TOTAL__PRICE;
}

module.exports = calculateRentalCost;
