/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const dailyCost = 40;
  const SevenDays = 7;
  const ThreeDays = 3;
  const discountForSevenDays = 50;
  const discountForThreeDays = 20;

  if (days >= SevenDays) {
    return dailyCost * days - discountForSevenDays;
  }

  if (days >= ThreeDays) {
    return dailyCost * days - discountForThreeDays;
  }

  return dailyCost * days;
}

module.exports = calculateRentalCost;
