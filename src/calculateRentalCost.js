/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  let totalCost = days * dailyRate;

  if (days >= 7) {
    totalCost -= 50; // Additional discount for 7 or more days
  }

  if (days >= 3 && days <= 6) {
    totalCost -= 20; // Basic discount for 3 to 6 days
  }

  return totalCost;
}

module.exports = calculateRentalCost;
