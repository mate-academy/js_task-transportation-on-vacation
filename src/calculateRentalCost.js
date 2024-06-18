/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_FEE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  let sum = days * DAILY_FEE;

  if (days >= LONG_TERM) {
    return (sum -= LONG_TERM_DISCOUNT);
  }

  if (days >= SHORT_TERM) {
    return (sum -= SHORT_TERM_DISCOUNT);
  }

  return sum;
}

module.exports = calculateRentalCost;
