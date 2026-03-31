/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const RENTAL_COST = DAILY_RATE * days;

  if (days >= LONG_TERM) {
    return RENTAL_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return RENTAL_COST - SHORT_TERM_DISCOUNT;
  }

  return RENTAL_COST;
}

module.exports = calculateRentalCost;
