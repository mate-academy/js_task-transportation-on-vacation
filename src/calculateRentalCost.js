/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM_THRESHOLD = 7;
  const SHORT_TERM_THRESHOLD = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const RESULT = days * 40;

  if (days >= LONG_TERM_THRESHOLD) {
    return RESULT - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_THRESHOLD && days < 7) {
    return RESULT - SHORT_TERM_DISCOUNT;
  }

  return RESULT;
}

module.exports = calculateRentalCost;
