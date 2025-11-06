/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const LONG_TERM_RENTAL_DAYS = 7;
  const MEDIUM_TERM_RENTAL_DAYS = 3;
  const SMALL_DISCOUNT = 20;
  const LARGE_DISCOUNT = 50;

  let totalCost = days * dailyRate;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    // Apply $50 discount for rentals of 7 or more days
    totalCost -= LARGE_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_RENTAL_DAYS) {
    // Apply $20 discount for rentals of 3 or more days
    totalCost -= SMALL_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
