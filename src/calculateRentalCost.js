/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  const RENTAL_PER_DAY = 40;
  const totalPrice = RENTAL_PER_DAY * days;

  if (days >= LONG_TERM) {
    return totalPrice - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    return totalPrice - SHORT_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
