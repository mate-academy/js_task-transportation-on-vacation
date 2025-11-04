/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const daysNumber = Number(days);
  const rentPerDay = 40 * daysNumber;
  const threeDaysSales = 20;
  const sevenDaysSales = 50;
  const maxSalesDays = 7;
  const minSalesDays = 3;

  if (daysNumber >= maxSalesDays) {
    return rentPerDay - sevenDaysSales;
  }

  if (daysNumber >= minSalesDays) {
    return rentPerDay - threeDaysSales;
  }

  return rentPerDay;
}

module.exports = calculateRentalCost;
