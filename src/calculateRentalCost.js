/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return days * price - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * price - SHORT_TERM_DISCOUNT;
  }

  return days * price;
}

module.exports = calculateRentalCost;
