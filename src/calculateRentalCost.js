/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RCICE_PER_DAY = 40;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return days * RCICE_PER_DAY - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return days * RCICE_PER_DAY - MEDIUM_TERM_DISCOUNT;
  }

  return days * RCICE_PER_DAY;
}
module.exports = calculateRentalCost;
