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

  const amount = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return amount - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return amount - SHORT_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
