/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAY_COST = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const SHORT_DAYS = 3;
  const LONG_DAYS = 7;

  if (days >= LONG_DAYS) {
    return DAY_COST * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_DAYS) {
    return DAY_COST * days - SHORT_TERM_DISCOUNT;
  }

  return DAY_COST * days;
}

module.exports = calculateRentalCost;
