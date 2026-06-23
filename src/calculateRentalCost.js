/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISKONT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISKONT = 50;
  const totalPrice = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    return totalPrice - LONG_TERM_DISKONT;
  }

  if (days >= SHORT_TERM) {
    return totalPrice - SHORT_TERM_DISKONT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
