/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const CONSTANT_TERM_DISCOUNT = 40;

  let totalAmount = days * CONSTANT_TERM_DISCOUNT;

  if (days >= LONG_TERM) {
    totalAmount -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    totalAmount -= SHORT_TERM_DISCOUNT;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
