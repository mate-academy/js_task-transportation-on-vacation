/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const TOTAL = DAILY_RATE * days;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_THRESHOLD = 3;
  const LONG_TERM_THRESHOLD = 7;

  if (days < SHORT_TERM_THRESHOLD) {
    return TOTAL;
  }

  if (days >= SHORT_TERM_THRESHOLD && days < LONG_TERM_THRESHOLD) {
    return TOTAL - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM_THRESHOLD) {
    return TOTAL - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
