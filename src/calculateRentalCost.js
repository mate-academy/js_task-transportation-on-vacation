/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SMALL_TERM = 3;
  const SMALL_TERM_DISCOUNT = 20;

  if (days < SMALL_TERM) {
    return days * 40;
  }

  if (days >= SMALL_TERM && days < LONG_TERM) {
    return days * 40 - SMALL_TERM_DISCOUNT;
  }

  return days * 40 - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
