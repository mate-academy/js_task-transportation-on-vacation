/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const RENTAL_CAR_COST = 40;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return days * RENTAL_CAR_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return days * RENTAL_CAR_COST - MEDIUM_TERM_DISCOUNT;
  }

  return days * RENTAL_CAR_COST;
}

module.exports = calculateRentalCost;
