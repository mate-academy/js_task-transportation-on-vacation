/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_COST = 40;

  const MEDIUM_RENTAL_PERIOD = 3;
  const MEDIUM_RENTAL_DISCOUNT = 20;

  const LONG_RENTAL_PERIOD = 7;
  const LONG_RENTAL_DISCOUNT = 50;

  const totalRentalCost = days * DAILY_RENTAL_COST;

  if (days >= LONG_RENTAL_PERIOD) {
    return totalRentalCost - LONG_RENTAL_DISCOUNT;
  }

  if (days >= MEDIUM_RENTAL_PERIOD) {
    return totalRentalCost - MEDIUM_RENTAL_DISCOUNT;
  }

  return totalRentalCost;
}

module.exports = calculateRentalCost;
