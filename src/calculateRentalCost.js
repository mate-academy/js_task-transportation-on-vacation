/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const shortTermThreshold = 3;
  const longTermThreshold = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;
  const baseCost = days * dailyRate;

  if (days >= 0 && days < shortTermThreshold) {
    return baseCost;
  }

  if (days >= shortTermThreshold && days < longTermThreshold) {
    return baseCost - shortTermDiscount;
  }

  if (days >= longTermThreshold) {
    return baseCost - longTermDiscount;
  }
}

  module.exports = calculateRentalCost;

