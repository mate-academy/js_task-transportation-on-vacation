/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const longTermThreshold = 7;
  const longTermDiscount = 50;
  const shortTermThreshold = 3;
  const shortTermDiscount = 20;

  const totalBaseCost = days * dailyRate;

  if (days >= longTermThreshold) {
    return totalBaseCost - longTermDiscount;
  }

  if (days >= shortTermThreshold) {
    return totalBaseCost - shortTermDiscount;
  }

  return totalBaseCost;
}

module.exports = calculateRentalCost;
