/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAYLY_PAYMENT = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return DAYLY_PAYMENT * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return DAYLY_PAYMENT * days - SHORT_TERM_DISCOUNT;
  }

  return DAYLY_PAYMENT * days;
}

module.exports = calculateRentalCost;
