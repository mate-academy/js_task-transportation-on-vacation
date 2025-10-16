/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RATE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const basePrise = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    return basePrise - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return basePrise - SHORT_TERM_DISCOUNT;
  }

  if (days < SHORT_TERM) {
    return basePrise;
  }
}

module.exports = calculateRentalCost;
