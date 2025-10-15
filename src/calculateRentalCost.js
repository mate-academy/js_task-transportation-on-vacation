/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const SHORT_RENTAL_DAYS = 3;
  const LONG_RENTAL_DAYS = 7;
  const SHORT_RENTAL_DISCOUNT = 20;
  const LONG_RENTAL_DISCOUNT = 50;

  const totalCost = days * DAILY_RATE;

  if (days >= LONG_RENTAL_DAYS) {
    return totalCost - LONG_RENTAL_DISCOUNT;
  }

  if (days >= SHORT_RENTAL_DAYS) {
    return totalCost - SHORT_RENTAL_DISCOUNT;
  }

  if (days < SHORT_RENTAL_DAYS) {
    return totalCost;
  }
}

module.exports = calculateRentalCost;
