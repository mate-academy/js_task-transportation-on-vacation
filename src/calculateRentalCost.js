/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;
  const SHORT_TERM_THRESHOLD = 3;
  const MEDIUM_TERM_THRESHOLD = 6;
  const LONG_TERM_THRESHOLD = 7;
  let totalCost = days * DAILY_RATE;

  if (days >= LONG_TERM_THRESHOLD) {
    totalCost -= LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_THRESHOLD && days <= MEDIUM_TERM_THRESHOLD) {
    totalCost -= MEDIUM_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
