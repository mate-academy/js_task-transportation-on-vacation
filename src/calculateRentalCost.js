/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const RENTAL_COST = 40 * days;

  if (days >= 7) {
    return RENTAL_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return RENTAL_COST - SHORT_TERM_DISCOUNT;
  }

  return RENTAL_COST;
  // write code here
}

module.exports = calculateRentalCost;
