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

  const cost = 40;

  if (days >= LONG_TERM) {
    return days * cost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * cost - SHORT_TERM_DISCOUNT;
  }

  return days * cost;
}

module.exports = calculateRentalCost;
