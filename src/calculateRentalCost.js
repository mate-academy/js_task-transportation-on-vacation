/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const DAY_COST = 40;

  if (days < SHORT_TERM) {
    return DAY_COST * days;
  }

  if (days >= LONG_TERM) {
    return DAY_COST * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return DAY_COST * days - SHORT_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
