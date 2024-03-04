/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dayPrice = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const sumPrice = days * dayPrice;

  if (days >= LONG_TERM) {
    return (sumPrice - LONG_TERM_DISCOUNT);
  }

  if (days >= SHORT_TERM) {
    return (sumPrice - SHORT_TERM_DISCOUNT);
  }

  return sumPrice;
}

module.exports = calculateRentalCost;
