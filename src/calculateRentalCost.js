/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const shortRentalThreshold = 3;
  const shortRentalDiscount = 20;
  const longRentalThreshold = 7;
  const longRentalDiscount = 50;
  const totalCost = days * dailyRate;

  if (days >= longRentalThreshold) {
    return totalCost - longRentalDiscount;
  }

  if (days >= shortRentalThreshold) {
    return totalCost - shortRentalDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
