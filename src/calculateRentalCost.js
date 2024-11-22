/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RENTAL_COST = 40;
  const LONG_TERM_DISCOUNT = 50;
  const LONG_TERM_DURATION = 7;
  const SHORT_TERM_DURATION = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM_DURATION) {
    return DAY_RENTAL_COST * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_DURATION) {
    return DAY_RENTAL_COST * days - SHORT_TERM_DISCOUNT;
  }

  return DAY_RENTAL_COST * days;
}

module.exports = calculateRentalCost;
