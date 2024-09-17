/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_RENTAL_COST = 40;
const LONG_TERM_RENTAL_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_RENTAL_DAYS = 3;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const totalCost = days * DAILY_RENTAL_COST;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_RENTAL_DAYS) {
    return totalCost - MID_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
