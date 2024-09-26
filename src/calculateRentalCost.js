/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const PRICE = 40;

  const totalPrice = days * PRICE;

  if (days >= LONG_TERM) {
    return totalPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return totalPrice - MEDIUM_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
