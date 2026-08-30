/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const totalSum = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    return totalSum - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalSum - SHORT_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
