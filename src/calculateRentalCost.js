/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const BASE_TERM = 3;
  const MIN_TERM_DISCOUNT = 20;
  const BASE_PRICE = 40;

  if (days >= LONG_TERM) {
    return days * BASE_PRICE - LONG_TERM_DISCOUNT;
  } else if (days >= BASE_TERM) {
    return days * BASE_PRICE - MIN_TERM_DISCOUNT;
  } else {
    return days * BASE_PRICE;
  }
}

module.exports = calculateRentalCost;
