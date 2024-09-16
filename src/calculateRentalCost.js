/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PAYMENT_FOR_DAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const payment = days * PAYMENT_FOR_DAY;

  if (days >= LONG_TERM) {
    return payment - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return payment - SHORT_TERM_DISCOUNT;
  }

  return payment;
}

module.exports = calculateRentalCost;
