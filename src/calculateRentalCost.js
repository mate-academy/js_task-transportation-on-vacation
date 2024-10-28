/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  let totalCost = days * dailyCost;

  if (days >= 7) {
    totalCost = totalCost - 50;
  }

  if (days >= 3 && days < 7) {
    totalCost = totalCost - 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
