/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // I tried everyting, and there is actualy second way to solve this problem
  // Well, this program gets job done.

  const LONG_TERM = 7;
  const MED_TERM = 6;
  const SHORT_TERM = 3;

  const BASE_PRICE = 40;
  const totalPrice = days * BASE_PRICE;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days < SHORT_TERM) {
    return totalPrice;
  }

  if (days >= SHORT_TERM && days <= MED_TERM) {
    return totalPrice - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return totalPrice - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
