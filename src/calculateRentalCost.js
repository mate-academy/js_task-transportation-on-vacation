/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const DAILY_RENTAL_RATE = 40;
  const LONG_TERM_RENTAL_DAYS = 7;
  const SHORT_TERM_RENTAL_DAYS = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  const total = days * DAILY_RENTAL_RATE;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return total - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENTAL_DAYS && days < LONG_TERM_RENTAL_DAYS) {
    return total - SHORT_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
