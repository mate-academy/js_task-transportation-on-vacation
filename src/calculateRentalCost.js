/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const everyDay = 40;
  const sellForSevenDays = 50;
  const sellForThreeDays = 20;

  if (days >= 7) {
    return days * everyDay - sellForSevenDays;
  }

  if (days >= 3 && days < 7) {
    return days * everyDay - sellForThreeDays;
  }

  return days * everyDay;
}

module.exports = calculateRentalCost;
