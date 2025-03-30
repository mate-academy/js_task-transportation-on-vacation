/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRate = 40;
  const afterSevenDaysOff = 50;
  const afterThreeDaysOff = 20;
  const bigSaleAfter = 7;
  const smallSaleAfter = 3;

  if (days >= bigSaleAfter) {
    return dailyRate * days - afterSevenDaysOff;
  }

  if (days >= smallSaleAfter) {
    return dailyRate * days - afterThreeDaysOff;
  }

  return dailyRate * days;
}

module.exports = calculateRentalCost;
