/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  let totalRentalCost = dailyRate * days;

  if (days >= 7) {
    totalRentalCost -= 50;

    return totalRentalCost;
  }

  if (days >= 3) {
    totalRentalCost -= 20;

    return totalRentalCost;
  }

  return totalRentalCost;
}

module.exports = calculateRentalCost;
