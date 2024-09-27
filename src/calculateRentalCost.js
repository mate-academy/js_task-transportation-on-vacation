/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const DAY_PRICE = 40;
  const TOTAL = days * DAY_PRICE;

  if (days >= LONG_TERM) {
    return TOTAL - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return TOTAL - SHORT_TERM_DISCOUNT;
  }

  return TOTAL;
}

module.exports = calculateRentalCost;
