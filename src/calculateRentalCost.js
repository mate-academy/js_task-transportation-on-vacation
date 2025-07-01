/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  let totalCost = days * dailyCost;

  if (days < 3) {
    totalCost = days * dailyCost;
  } else if (days < 7) {
    totalCost = days * dailyCost - 20;
  } else if (days >= 7) {
    totalCost = days * dailyCost - 50;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
