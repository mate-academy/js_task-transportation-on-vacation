/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const DAILY_FEE = 40;
  const amount = days * DAILY_FEE;

  if (days >= LONG_TERM) {
    return amount - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return amount - SHORT_TERM_DISCOUNT;
  }

  return amount;
}

module.exports = calculateRentalCost;
