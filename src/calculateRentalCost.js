/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceForDay = 40;
  const discountForSevenDays = 50;
  const discountForThreeDays = 20;
  const discountSevenDays = 7;
  const discountThreeDays = 3;
  let totalCost = days * priceForDay;

  if (days >= discountSevenDays) {
    totalCost -= discountForSevenDays;
  } else if (days >= discountThreeDays) {
    totalCost -= discountForThreeDays;
  }

  return totalCost;
}
module.exports = calculateRentalCost;
