/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_COST = 40;
  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const TOTAL_RENT = BASE_COST * days;

  if (days >= MIDDLE_TERM && days < LONG_TERM) {
    return TOTAL_RENT - MIDDLE_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return TOTAL_RENT - LONG_TERM_DISCOUNT;
  }

  return TOTAL_RENT;
}

module.exports = calculateRentalCost;
