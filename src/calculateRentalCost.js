/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;
  const BASE_PRICE = 40;

  const totalPrice = days * BASE_PRICE;

  if (days >= LONG_TERM) {
    return totalPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM && days < LONG_TERM) {
    return totalPrice - MIDDLE_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
