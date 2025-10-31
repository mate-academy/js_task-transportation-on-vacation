/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_DAY = 40;
  const LONG_TERM_RENTAL_DAY = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_RENTAL_DAY = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const total = PRICE_DAY * days;

  if (days >= LONG_TERM_RENTAL_DAY) {
    return total - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENTAL_DAY) {
    return total - SHORT_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
