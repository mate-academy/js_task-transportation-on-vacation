/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_THRESHOLD = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM_THRESHOLD) {
    return days * DAILY_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_THRESHOLD) {
    return days * DAILY_PRICE - SHORT_TERM_DISCOUNT;
  }

  return days * DAILY_PRICE;
}

module.exports = calculateRentalCost;
