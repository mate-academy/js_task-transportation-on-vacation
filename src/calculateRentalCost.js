/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const discountForThreeDays = 20;
  const discountForSevenDays = 50;

  let totalCost = days * dailyRate;

  if (days >= 7) {
    totalCost -= discountForSevenDays;
  } else if (days >= 3) {
    totalCost -= discountForThreeDays;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
