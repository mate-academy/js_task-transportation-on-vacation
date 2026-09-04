/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM_DAYS) {
    return days * DAILY_RATE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_DAYS) {
    return days * DAILY_RATE - SHORT_TERM_DISCOUNT;
  }

  return days * DAILY_RATE;
}

module.exports = calculateRentalCost;
