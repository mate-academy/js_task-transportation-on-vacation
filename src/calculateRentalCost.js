/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_THRESHOLD = 7;
  const SHORT_TERM_THRESHOLD = 3;

  if (days >= LONG_TERM_THRESHOLD) {
    return DAILY_RATE * days - LONG_TERM_DISCOUNT;
  }
  if (days >= SHORT_TERM_THRESHOLD) {
    return DAILY_RATE * days - SHORT_TERM_DISCOUNT;
  }
  return DAILY_RATE * days;
}

module.exports = calculateRentalCost;
