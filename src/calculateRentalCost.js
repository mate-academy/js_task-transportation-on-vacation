/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  let totalCost = days * costPerDay;

  if (days >= 7) {
    totalCost -= 50; // Discount for 7 or more days
  } else if (days >= 3) {
    totalCost -= 20; // Discount for 3 to 6 days
  }

  return totalCost;
}
module.exports = calculateRentalCost;
