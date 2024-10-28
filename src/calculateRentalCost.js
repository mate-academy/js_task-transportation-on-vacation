/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_COST = 40;
  const DISCOUNT_FOR_LONG_RENTAL = 50;
  const DISCOUNT_FOR_MEDIUM_RENTAL = 20;
  const MINIMUM_DAYS_FOR_LONG_RENTAL = 7;
  const MINIMUM_DAYS_FOR_MEDIUM_RENTAL = 3;

  const cost = DAILY_RENTAL_COST * days;

  if (days >= MINIMUM_DAYS_FOR_LONG_RENTAL) {
    return cost - DISCOUNT_FOR_LONG_RENTAL;
  }

  if (days >= MINIMUM_DAYS_FOR_MEDIUM_RENTAL) {
    return cost - DISCOUNT_FOR_MEDIUM_RENTAL;
  }

  return cost;
}

module.exports = calculateRentalCost;
