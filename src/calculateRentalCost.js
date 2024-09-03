/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const totalCost = days * dailyRate;

  if (days >= 3 && days <= 6) {
    return totalCost - 20;
  }

  if (days >= 7) {
    return totalCost - 50;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
