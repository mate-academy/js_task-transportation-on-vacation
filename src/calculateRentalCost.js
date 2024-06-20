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

  if (days >= LONG_TERM) {
    return days * 40 - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    return days * 40 - SHORT_TERM_DISCOUNT;
  }

  return days * 40;
}

module.exports = calculateRentalCost;
