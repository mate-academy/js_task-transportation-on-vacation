/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENT = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const totalRent = DAILY_RENT * days;

  if (days >= LONG_TERM) {
    return totalRent - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalRent - SHORT_TERM_DISCOUNT;
  }

  return totalRent;
}

module.exports = calculateRentalCost;
