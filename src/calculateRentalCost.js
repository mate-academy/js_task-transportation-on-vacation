/**
 * @param {number} days
 *
 * @return {number}
 */
/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_RENTAL_DAYS = 7;
  const MEDIUM_RENTAL_DAYS = 3;
  const LONG_RENTAL_DISCOUNT = 50;
  const MEDIUM_RENTAL_DISCOUNT = 20;

  if (days >= LONG_RENTAL_DAYS) {
    return days * DAILY_RATE - LONG_RENTAL_DISCOUNT;
  }

  if (days >= MEDIUM_RENTAL_DAYS) {
    return days * DAILY_RATE - MEDIUM_RENTAL_DISCOUNT;
  }

  return days * DAILY_RATE;
}


module.exports = calculateRentalCost;
