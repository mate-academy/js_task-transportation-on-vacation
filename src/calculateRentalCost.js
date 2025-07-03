/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const dailyRate = 40;
  const discountThresholdSmall = 3;
  const discountThresholdLarge = 7;
  const discountRateSmall = 20;
  const discountRateLarge = 50;

  let totalCost = 0;

  if (days >= discountThresholdLarge) {
    totalCost += dailyRate * days - discountRateLarge;
  } else if (days >= discountThresholdSmall) {
    totalCost += dailyRate * days - discountRateSmall;
  } else if (days > 0) {
    totalCost += dailyRate * days;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
