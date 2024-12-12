/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const discount7Days = 50;
  const discount3Days = 20;
  const longTermDays = 7;
  const midTermDays = 3;

  if (days >= longTermDays) {
    return days * dailyRate - discount7Days;
  }

  if (days >= midTermDays) {
    return days * dailyRate - discount3Days;
  }

  return days * dailyRate;
}

module.exports = calculateRentalCost;
