/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const TOTAL_PRICE = days * DAILY_PRICE;

  if (days >= LONG_TERM) {
    return TOTAL_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return TOTAL_PRICE - SHORT_TERM_DISCOUNT;
  }

  return TOTAL_PRICE;
}

module.exports = calculateRentalCost;
