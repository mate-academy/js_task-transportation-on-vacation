/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  let basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    basePrice -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    basePrice -= SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
