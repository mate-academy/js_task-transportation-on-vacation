/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_COST = 40;
  const MEDIUM_TERM_RENTAL_DAYS = 3;
  const MEDIUM_TERM_RENTAL_DISCOUNT = 20;
  const LONG_TERM_RENTAL_DAYS = 7;
  const LONG_TERM_RENTAL_DISCOUNT = 50;
  const totalRentalCost = days * DAILY_RENTAL_COST;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return totalRentalCost - LONG_TERM_RENTAL_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_RENTAL_DAYS) {
    return totalRentalCost - MEDIUM_TERM_RENTAL_DISCOUNT;
  }

  return totalRentalCost;
}

module.exports = calculateRentalCost;
