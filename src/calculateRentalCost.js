/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const PRICE_PER_DAY = 40;

  if (days >= LONG_TERM) {
    return days * PRICE_PER_DAY - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * PRICE_PER_DAY - SHORT_TERM_DISCOUNT;
  }

  return days * PRICE_PER_DAY;
}

module.exports = calculateRentalCost;
