/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const totalCost = dailyRate * days;

  if (days < 3) {
    return totalCost;
  }

  if (days >= 3 && days < 7) {
    return totalCost - 20;
  }

  if (days >= 7) {
    return totalCost - 50;
  }
}

module.exports = calculateRentalCost;
