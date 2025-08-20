/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_DAY = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return RENT_DAY * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return RENT_DAY * days - SHORT_TERM_DISCOUNT;
  }

  return RENT_DAY * days;
}

module.exports = calculateRentalCost;
