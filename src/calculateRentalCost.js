/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return days * DAILY_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * DAILY_PRICE - SHORT_TERM_DISCOUNT;
  }

  return days * DAILY_PRICE;
}

module.exports = calculateRentalCost;
