/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const basePerDayPrice = 40;

  if (days >= 7) {
    return days * basePerDayPrice - 50;
  }

  if (days >= 3) {
    return days * basePerDayPrice - 20;
  }

  return days * basePerDayPrice;
}

module.exports = calculateRentalCost;
