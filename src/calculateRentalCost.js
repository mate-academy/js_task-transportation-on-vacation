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
  const PRICE = days * 40;

  switch (true) {
    case days >= LONG_TERM:
      return PRICE - LONG_TERM_DISCOUNT;

    case days >= SHORT_TERM:
      return PRICE - SHORT_TERM_DISCOUNT;

    default:
      return PRICE;
  }
}

module.exports = calculateRentalCost;
