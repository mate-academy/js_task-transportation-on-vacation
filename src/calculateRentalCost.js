/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const basePrice = days * PRICE;

  switch (true) {
    case days >= LONG_TERM:
      return basePrice - LONG_TERM_DISCOUNT;
    case days >= SHORT_TERM:
      return basePrice - SHORT_TERM_DISCOUNT;
    default:
      return basePrice;
  }
}

module.exports = calculateRentalCost;
