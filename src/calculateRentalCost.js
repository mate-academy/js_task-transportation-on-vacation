/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const DAILY_RENTAL_COST = 40;

  const cost = DAILY_RENTAL_COST * days;

  if (days >= LONG_TERM) {
    return cost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return cost - SHORT_TERM_DISCOUNT;
  }

  return cost;
}

module.exports = calculateRentalCost;
