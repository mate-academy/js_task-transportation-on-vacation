/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const EVERY_DAY_PAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return days * EVERY_DAY_PAY - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * EVERY_DAY_PAY - SHORT_TERM_DISCOUNT;
  }

  return days * EVERY_DAY_PAY;
}

module.exports = calculateRentalCost;
