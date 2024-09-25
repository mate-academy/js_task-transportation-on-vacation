/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const PRICE_PER_DAY = 40;

  let totalPrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    totalPrice -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    totalPrice -= SHORT_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
