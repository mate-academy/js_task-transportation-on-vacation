/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PAY_PER_DAY = 40;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  if (days < SHORT_TERM) {
    return days * PAY_PER_DAY;
  }

  if (days >= LONG_TERM) {
    return days * PAY_PER_DAY - BIG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * PAY_PER_DAY - SMALL_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
