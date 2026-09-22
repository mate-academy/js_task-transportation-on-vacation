/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const SHORT_TERN = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return 40 * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERN) {
    return 40 * days - SHORT_TERM_DISCOUNT;
  }

  return 40 * days;
}

module.exports = calculateRentalCost;
