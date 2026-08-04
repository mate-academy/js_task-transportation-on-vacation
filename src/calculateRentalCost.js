/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;
  const LONG_TERM = 7;
  const MID_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;

  const TOTAL_RENT = RENT_COST * days;

  if (days >= LONG_TERM) {
    return TOTAL_RENT - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return TOTAL_RENT - MID_TERM_DISCOUNT;
  }

  return TOTAL_RENT;
}

module.exports = calculateRentalCost;
