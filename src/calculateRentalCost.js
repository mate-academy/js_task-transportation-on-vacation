/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const REGULAR_FEE = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  const regularCost = days * REGULAR_FEE;

  switch (true) {
    case days >= LONG_TERM:
      return regularCost - LONG_TERM_DISCOUNT;
    case days >= SHORT_TERM:
      return regularCost - SHORT_TERM_DISCOUNT;
    default:
      return regularCost;
  }
}

module.exports = calculateRentalCost;
