/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const amount = days * BASE_PRICE;

  if (days >= LONG_TERM) {
    return amount - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return amount - SHORT_TERM_DISCOUNT;
  }

  return amount;
}

module.exports = calculateRentalCost;
