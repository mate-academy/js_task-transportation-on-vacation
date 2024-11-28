/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return days * 40 - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return days * 40 - MIDDLE_TERM_DISCOUNT;
  } else {
    return days * 40;
  }
}

module.exports = calculateRentalCost;
