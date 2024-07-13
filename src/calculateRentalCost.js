/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RENTAL_RATE = 40;
  const SHORT_TERM_RENTAL_DAYS = 3;
  const LONG_TERM_RENTAL_DAYS = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const totalCost = DAILY_RENTAL_RATE * days;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENTAL_DAYS) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
