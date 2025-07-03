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

  if (days >= discountThresholdLarge) {
    return dailyRate * days - discountRateLarge;
  }

  if (days >= discountThresholdSmall) {
    return dailyRate * days - discountRateSmall;
  }

  return dailyRate * days;
}

module.exports = calculateRentalCost;
