/**
 * Calculates the total rental cost based on the number of days.
 *
 * @param {number} days - Number of days the car is rented
 * @return {number} - Total cost after applying discounts
 */
// write code here
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const totalCost = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
