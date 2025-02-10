/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;

  const RENT_FOR_DAY = 40;

  const CALCULATED_RENT = RENT_FOR_DAY * days;

  if (days >= LONG_TERM_DAYS) {
    return CALCULATED_RENT - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_DAYS) {
    return CALCULATED_RENT - SHORT_TERM_DISCOUNT;
  }

  return CALCULATED_RENT;
}

module.exports = calculateRentalCost;
