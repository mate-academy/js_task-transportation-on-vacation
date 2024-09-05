/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RENTAL_RATE = 40;
  const DISCOUNT_FOR_3_DAYS = 20;
  const DISCOUNT_FOR_7_DAYS = 50;
  const MIN_DAYS_FOR_SMALL_DISCOUNT = 3;
  const MIN_DAYS_FOR_BIG_DISCOUNT = 7;

  const price = days * DAILY_RENTAL_RATE;

  if (days >= MIN_DAYS_FOR_BIG_DISCOUNT) {
    return price - DISCOUNT_FOR_7_DAYS;
  }

  if (days >= MIN_DAYS_FOR_SMALL_DISCOUNT) {
    return price - DISCOUNT_FOR_3_DAYS;
  }

  return price;
}

module.exports = calculateRentalCost;
