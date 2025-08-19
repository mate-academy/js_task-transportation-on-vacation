/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40;
  const MAX_TERM = 7;
  const MAX_TERM_DISCOUNT = 50;
  const MIN_TERM = 3;
  const MIN_TERM_DISCOUNT = 20;

  const totalPrice = days * BASE_PRICE;

  if (days >= MAX_TERM) {
    return totalPrice - MAX_TERM_DISCOUNT;
  }

  if (days >= MIN_TERM) {
    return totalPrice - MIN_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
