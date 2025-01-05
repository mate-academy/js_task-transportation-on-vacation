/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISKOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISKOUNT = 20;

  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISKOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - SHORT_TERM_DISKOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
