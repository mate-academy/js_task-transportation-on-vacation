/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTAL_PAY = 40;
  const LONG_TERM_DISCOUNT = 50;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const SHORT_TERM = 3;

  if (days >= LONG_TERM) {
    return RENTAL_PAY * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return RENTAL_PAY * days - SHORT_TERM_DISCOUNT;
  }

  return RENTAL_PAY * days;
}
module.exports = calculateRentalCost;
