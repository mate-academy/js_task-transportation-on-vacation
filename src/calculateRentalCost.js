/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RENTAL_RATE = 40;
  const SMALL_RENTAL_THRESHOLD_DAYS = 3;
  const LONG_RENTAL_THRESHOLD_DAYS = 7;
  const SMALL_RENTAL_DISCOUNT = 20;
  const LONG_RENTAL_DISCOUNT = 50;

  const total = days * DAILY_RENTAL_RATE;

  if (days >= LONG_RENTAL_THRESHOLD_DAYS) {
    return total - LONG_RENTAL_DISCOUNT;
  }

  if (days >= SMALL_RENTAL_THRESHOLD_DAYS) {
    return total - SMALL_RENTAL_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
