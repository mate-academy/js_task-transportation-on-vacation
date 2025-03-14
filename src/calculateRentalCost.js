/**
 * Calculates the total rental cost based on the number of days.
 *
 * @param {number} days - The number of rental days.
 * @return {number} The total rental cost after applying discounts.
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LARGE_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const total = DAILY_RATE * days;

  if (days >= 7) {
    return total - LARGE_DISCOUNT;
  }

  if (days >= 3) {
    return total - SMALL_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
