/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUT = 20;

  if (days >= LONG_TERM) {
    return days * RENT_DAY - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * RENT_DAY - SHORT_TERM_DISCOUT;
  }

  return days * RENT_DAY;
}

module.exports = calculateRentalCost;
