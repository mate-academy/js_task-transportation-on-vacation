/**
 * Calculates the rental cost based on the number of days.
 * @param {number} days - The number of days the car is rented.
 * @return {number} - The total rental cost.
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  let totalCost = days * costPerDay;

  if (days >= 7) {
    totalCost -= 50; // Apply $50 discount for 7 or more days
  } else if (days >= 3) {
    totalCost -= 20; // Apply $20 discount for 3 to 6 days
  }

  return totalCost;
}

module.exports = calculateRentalCost;
