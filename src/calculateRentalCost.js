/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const REGULAR_RENT = RENT_PER_DAY * days;

  if (days >= LONG_TERM) {
    return REGULAR_RENT - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return REGULAR_RENT - SHORT_TERM_DISCOUNT;
  }

  return REGULAR_RENT;
}

module.exports = calculateRentalCost;
