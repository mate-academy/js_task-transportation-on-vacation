/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCost = 0;
  const dailyRentalCost = 40;
  const threeDayDiscount = 20;
  const sevenDayDiscount = 50;

  for (let i = 0; i < days; i++) {
    totalCost += dailyRentalCost;
  }

  if (days >= 3 && days < 7) {
    totalCost -= threeDayDiscount;
  }

  if (days >= 7) {
    totalCost -= sevenDayDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
