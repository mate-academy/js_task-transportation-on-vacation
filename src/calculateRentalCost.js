/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_RATE = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const LONG_TERM_RENTAL = 7;
  const SHORT_TERM_RENTAL = 3;
  const VACATION_RENTAL_COST = days * DAILY_RENTAL_RATE;

  if (days >= LONG_TERM_RENTAL) {
    return VACATION_RENTAL_COST - BIG_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENTAL) {
    return VACATION_RENTAL_COST - SMALL_DISCOUNT;
  }

  return VACATION_RENTAL_COST;
}

module.exports = calculateRentalCost;
