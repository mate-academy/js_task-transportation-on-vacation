/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40;
  const SHORT_TERM_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM_DAYS) {
    return days * PRICE_PER_DAY - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_DAYS) {
    return days * PRICE_PER_DAY - SHORT_TERM_DISCOUNT;
  }

  return days * PRICE_PER_DAY;
}

module.exports = calculateRentalCost;
