/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRISCE_PER_DAY = 40;
  const LONG_TERM_DISCONT = 50;
  const SHORT_TERM_DISCONT = 20;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;

  const basePrice = days * PRISCE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCONT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - SHORT_TERM_DISCONT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
