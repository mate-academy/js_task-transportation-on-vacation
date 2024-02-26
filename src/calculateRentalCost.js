/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const dailyRate = 40;
  const longTermThreshold = 7;
  const longTermDiscount = 50;
  const shortTermThreshold = 3;
  const shortTermDiscount = 20;

  const totalCost = days * dailyRate;

  if (days >= longTermThreshold) {
    return totalCost - longTermDiscount;
  }

  if (days >= shortTermThreshold) {
    return totalCost - shortTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
