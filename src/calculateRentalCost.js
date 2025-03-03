/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const FIX_PRICE = 40;

  if (days >= LONG_TERM) {
    return days * FIX_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * FIX_PRICE - SHORT_TERM_DISCOUNT;
  }

  return days * FIX_PRICE;
}

module.exports = calculateRentalCost;
