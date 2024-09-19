/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_COST = 40;
  const LONG_TERM_RENTAL = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_RENTAL = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const RENTAL_COST = days * DAILY_COST;

  if (days >= LONG_TERM_RENTAL) {
    return RENTAL_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENTAL) {
    return RENTAL_COST - SHORT_TERM_DISCOUNT;
  }

  return RENTAL_COST;
}

module.exports = calculateRentalCost;
