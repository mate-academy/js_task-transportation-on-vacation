/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const PAY_FOR_DAY = 40;

  if (days >= LONG_TERM) {
    return days * PAY_FOR_DAY - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * PAY_FOR_DAY - SHORT_TERM_DISCOUNT;
  }

  return days * PAY_FOR_DAY;
}

module.exports = calculateRentalCost;
