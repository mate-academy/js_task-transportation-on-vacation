/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_MORE_THAN_7_DAYS = 50;
  const DISCOUNT_MORE_THAN_3_DAYS = 20;
  const RENTAL_DAYS_MORE_7 = 7;
  const RENTAL_DAYS_MORE_3 = 3;

  const rentalCost = DAILY_RATE * days;

  if (days >= RENTAL_DAYS_MORE_7) {
    return rentalCost - DISCOUNT_MORE_THAN_7_DAYS;
  }

  if (days >= RENTAL_DAYS_MORE_3) {
    return rentalCost - DISCOUNT_MORE_THAN_3_DAYS;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
