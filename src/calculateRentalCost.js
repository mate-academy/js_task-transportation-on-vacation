/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_RENTAL_COST = 40;
const LONG_TERM_RENTAL_DAYS = 7;
const SHORT_TERM_RENTAL_DAYS = 3;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  if (days >= LONG_TERM_RENTAL_DAYS) {
    return days * DAILY_RENTAL_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENTAL_DAYS) {
    return days * DAILY_RENTAL_COST - SHORT_TERM_DISCOUNT;
  }

  return days * DAILY_RENTAL_COST;
}

module.exports = calculateRentalCost;
