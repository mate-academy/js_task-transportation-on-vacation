/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONE_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const sum = days * ONE_DAY;

  if (days >= LONG_TERM) {
    return sum - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return sum - SHORT_TERM_DISCOUNT;
  }

  return sum;
}

module.exports = calculateRentalCost;
