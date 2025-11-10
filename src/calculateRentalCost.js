/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  // write code here
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const PRICE_PER_DAY = 40;
  let total = PRICE_PER_DAY * days;


  if (days >= LONG_TERM_DAYS) {
    total -= LONG_TERM_DISCOUNT;
    return total;
  }
  if (days >= SHORT_TERM_DAYS) {
    total -= SHORT_TERM_DISCOUNT;
    return total;
  }

  return total;
}

module.exports = calculateRentalCost;
