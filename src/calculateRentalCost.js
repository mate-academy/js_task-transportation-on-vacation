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
  const RENT_A_DAY = 40;

  if (days < SHORT_TERM) {
    return days * RENT_A_DAY;
  }

  if (days < LONG_TERM) {
    return days * RENT_A_DAY - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return days * RENT_A_DAY - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
