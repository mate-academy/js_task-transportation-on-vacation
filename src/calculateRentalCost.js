/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM_DISCOUNT_7_DAYS = 50;
  const LONG_TERM_DISCOUNT_3_DAYS = 20;

  if (days >= 7) {
    return days * 40 - LONG_TERM_DISCOUNT_7_DAYS;
  }

  if (days >= 3 && days < 7) {
    return days * 40 - LONG_TERM_DISCOUNT_3_DAYS;
  }

  return days * 40;
}

module.exports = calculateRentalCost;
