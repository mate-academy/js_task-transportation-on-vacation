/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const dayPrice = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const SHORT_TERM = 3;

  if (days >= LONG_TERM) {
    return days * dayPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * dayPrice - SHORT_TERM_DISCOUNT;
  }

  return days * dayPrice;
}

module.exports = calculateRentalCost;
