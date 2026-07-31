/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_COST = 40;
  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return DAY_COST * days - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return DAY_COST * days - MIDDLE_TERM_DISCOUNT;
  }

  return DAY_COST * days;
}

module.exports = calculateRentalCost;
