/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const totalCost = days * dailyCost;

  if (days >= 7) {
    return totalCost - 50; // Discount for 7 or more days
  } else if (days >= 3) {
    return totalCost - 20; // Discount for 3 or more days
  } else {
    return totalCost; // No discount for less than 3 days
  }
}

module.exports = calculateRentalCost;
