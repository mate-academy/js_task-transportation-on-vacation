/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const BASE_PRICE = 40;

  if (days >= LONG_TERM) {
    return days * BASE_PRICE - LONG_TERM_DISCOUNT;
  }

  if (days < LONG_TERM && days >= SHORT_TERM) {
    return days * BASE_PRICE - SHORT_TERM_DISCOUNT;
  }

  return days * BASE_PRICE;
}

module.exports = calculateRentalCost;
