/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_RATE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DAYS = 7;
  const SHORT_TERM_DAYS = 3;

  if (days >= LONG_TERM_DAYS) {
    return days * DAILY_RENTAL_RATE - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_DAYS) {
    return days * DAILY_RENTAL_RATE - SHORT_TERM_DISCOUNT;
  }

  return days * DAILY_RENTAL_RATE;
}

module.exports = calculateRentalCost;
