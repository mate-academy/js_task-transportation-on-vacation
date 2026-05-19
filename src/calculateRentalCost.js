/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const RENTAL_PRICE = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return RENTAL_PRICE * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return RENTAL_PRICE * days - SHORT_TERM_DISCOUNT;
  }

  return RENTAL_PRICE * days;
}

module.exports = calculateRentalCost;
