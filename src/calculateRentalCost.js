/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_THRESHOLD = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let totalCost = days * DAILY_RATE;

  if (days >= LONG_TERM_THRESHOLD) {
    totalCost -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM_THRESHOLD) {
    totalCost -= SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
