/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const DAY_RENT = 40;
  const TOTAL_RENT = days * DAY_RENT;

  if (days >= LONG_TERM) {
    return TOTAL_RENT - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return TOTAL_RENT - SHORT_TERM_DISCOUNT;
  }

  return TOTAL_RENT;
}

module.exports = calculateRentalCost;
