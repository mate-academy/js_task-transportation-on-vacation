/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_MORE_THAN_7_DAYS = 50;
  const DISCOUNT_MORE_THAN_3_DAYS = 20;
  const LONG_TERM_RENTAL_DAYS = 7;
  const SHORT_TERM_RENTAL_DAYS = 3;

  const rentalCost = DAILY_RATE * days;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return rentalCost - DISCOUNT_MORE_THAN_7_DAYS;
  }

  if (days >= SHORT_TERM_RENTAL_DAYS) {
    return rentalCost - DISCOUNT_MORE_THAN_3_DAYS;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
