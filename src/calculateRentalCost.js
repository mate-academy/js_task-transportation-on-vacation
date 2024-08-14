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

  switch (true) {
    case days >= LONG_TERM:
      return days * REGULAR_FEE - LONG_TERM_DISCOUNT;
    case days >= SHORT_TERM:
      return days * REGULAR_FEE - SHORT_TERM_DISCOUNT;
    default:
      return days * REGULAR_FEE;
  }
}

module.exports = calculateRentalCost;
