/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRate = 40;
  let totalCost = days * dailyRate;

  if (days >= 7) {
    totalCost -= 50; // Discount for 7 or more days
  } else if (days >= 3) {
    totalCost -= 20; // Discount for 3 or more days
  }

  return totalCost;
}

module.exports = calculateRentalCost;
