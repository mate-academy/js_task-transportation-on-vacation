/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_RATE = 40;
  const MIN_DAYS_FOR_DISCOUNT = 3;
  const MAX_DAYS_FOR_DISCOUNT = 7;
  const SMALL_DISCOUNT_AMOUNT = 20;
  const LARGE_DISCOUNT_AMOUNT = 50;

  if (days >= MAX_DAYS_FOR_DISCOUNT) {
    return DAILY_RENTAL_RATE * days - LARGE_DISCOUNT_AMOUNT;
  }

  if (days >= MIN_DAYS_FOR_DISCOUNT) {
    return DAILY_RENTAL_RATE * days - SMALL_DISCOUNT_AMOUNT;
  }

  return DAILY_RENTAL_RATE * days;
}

module.exports = calculateRentalCost;
