/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const costForAllDay = costPerDay * days;
  const countDaysForSaleFirst = 3;
  const countDaysForSaleSecond = 7;
  const saleForThreeDays = 20;
  const saleForSevenDays = 50;

  if (days >= countDaysForSaleSecond) {
    return costForAllDay - saleForSevenDays;
  }

  if (days >= countDaysForSaleFirst) {
    return costForAllDay - saleForThreeDays;
  }

  return costForAllDay;
}

module.exports = calculateRentalCost;
