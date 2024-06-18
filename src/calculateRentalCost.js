/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_RATE = 40;
  const rentalCost = days * DAILY_RENTAL_RATE;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return rentalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return rentalCost - SHORT_TERM_DISCOUNT;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
