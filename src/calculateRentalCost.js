/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_DISCOUNT = 20;
  const LONG_DISCOUNT = 50;

  if (days < SHORT_TERM) {
    return days * BASE_PRICE;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return days * BASE_PRICE - SHORT_DISCOUNT;
  }

  return days * BASE_PRICE - LONG_DISCOUNT;
}

module.exports = calculateRentalCost;
