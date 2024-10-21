/**
 * Calculates the rental cost based on the number of days.
 * @param {number} days - The number of days the car is rented.
 * @return {number} - The total rental cost.
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const DISCOUNT_7_DAYS = 50;
  const DISCOUNT_3_DAYS = 20;

  const totalCost = days * COST_PER_DAY;

  if (days >= 7) {
    return totalCost - DISCOUNT_7_DAYS;
  }

  if (days >= 3) {
    return totalCost - DISCOUNT_3_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
