/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  let totalCost = days * dailyRate;

  if (days < 3) {
    return totalCost;
  } else if (days < 7) {
    totalCost = totalCost - 20;

    return totalCost;
  } else {
    totalCost = totalCost - 50;

    return totalCost;
  }
}

module.exports = calculateRentalCost;
