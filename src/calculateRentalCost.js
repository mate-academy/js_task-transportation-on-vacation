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
  const DAY_RENTAL_COST = 40;

  if (days >= LONG_TERM) {
    return DAY_RENTAL_COST * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return DAY_RENTAL_COST * days - SHORT_TERM_DISCOUNT;
  }

  return DAY_RENTAL_COST * days;
}

module.exports = calculateRentalCost;
