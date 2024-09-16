/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // Base cost per day
  const baseCostPerDay = 40;

  // Calculate the total cost without any discounts
  let totalCost = days * baseCostPerDay;

  // Apply discounts based on the number of days rented
  if (days >= 7) {
    // $50 off for renting 7 or more days
    totalCost -= 50;
  } else if (days >= 3) {
    // $20 off for renting 3 or more days
    totalCost -= 20;
  }

  // Ensure the total cost is non-negative
  return Math.max(totalCost, 0);
}

module.exports = calculateRentalCost;
