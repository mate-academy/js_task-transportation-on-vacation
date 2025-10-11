/**
 * @param {number} numberOfDays
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  // write code here
  const DAILY_RATE = 40;
  const SHORT_TERM_THRESHOLD = 3;
  const LONG_TERM_THRESHOLD = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const basePrice = numberOfDays * DAILY_RATE;

  if (numberOfDays >= LONG_TERM_THRESHOLD) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= SHORT_TERM_THRESHOLD) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
