/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const RENT_PER_DAY = 40;
  const LONG_RENTAL_PERIOD_DAYS = 7;
  const LONG_RENTAL_PERIOD_DAYS_DISCOUNT = 50;
  const SHORT_RENTAL_PERIOD_DAYS = 3;
  const SHORT_RENTAL_PERIOD_DAYS_DISCOUNT = 20;

  const totalCost = days * RENT_PER_DAY;

  if (days >= LONG_RENTAL_PERIOD_DAYS) {
    return totalCost - LONG_RENTAL_PERIOD_DAYS_DISCOUNT;
  }

  if (days >= SHORT_RENTAL_PERIOD_DAYS) {
    return totalCost - SHORT_RENTAL_PERIOD_DAYS_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
