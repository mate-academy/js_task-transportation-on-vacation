/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_COST = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= 7) {
    return DAY_COST * days - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return DAY_COST * days - SHORT_TERM_DISCOUNT;
  }

  return DAY_COST * days;
}

module.exports = calculateRentalCost;
