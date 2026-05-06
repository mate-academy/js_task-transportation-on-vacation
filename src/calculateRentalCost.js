/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return days * RENT - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * RENT - SHORT_TERM_DISCOUNT;
  }

  return days * RENT;
}

module.exports = calculateRentalCost;
