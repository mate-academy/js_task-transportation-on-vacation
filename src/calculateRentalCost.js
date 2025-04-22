/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const SHORT_DISCOUNT = 20;
  const LONG_DISCOUNT = 50;
  const PAYMENT = RENT_PER_DAY * days;

  if (days >= LONG_TERM) {
    return PAYMENT - LONG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return PAYMENT - SHORT_DISCOUNT;
  }

  return PAYMENT;
}

module.exports = calculateRentalCost;
