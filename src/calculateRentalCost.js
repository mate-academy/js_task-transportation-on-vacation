/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const totalCost = days * dailyRate;

  if (days >= 7) {
    return totalCost - 50;
  }

  if (days >= 3) {
    return totalCost - 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
