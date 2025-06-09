/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_RATE = 40;
  const MEDIUM_TERM_RENTAL_DAYS = 3;
  const LONG_TERM_RENTAL_DAYS = 7;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  const baseRentalCost = days * DAILY_RENTAL_RATE;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return baseRentalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_RENTAL_DAYS) {
    return baseRentalCost - MEDIUM_TERM_DISCOUNT;
  }

  return baseRentalCost;
}

module.exports = calculateRentalCost;

