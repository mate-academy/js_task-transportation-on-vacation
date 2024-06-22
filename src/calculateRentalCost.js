/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const HALF_TERM = 3;
  const LONG_TERM = 7;
  const TOTAL_WITHOUT_DISCOUNT = 40 * days;
  const HALF_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= HALF_TERM && days < LONG_TERM) {
    return TOTAL_WITHOUT_DISCOUNT - HALF_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return TOTAL_WITHOUT_DISCOUNT - LONG_TERM_DISCOUNT;
  }

  return TOTAL_WITHOUT_DISCOUNT;
}

module.exports = calculateRentalCost;
