/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const discount7DaysOrMore = 50;
  const discount3DaysOrMore = 20;

  let totalCost = days * dailyRate;

  if (days >= 7) {
    totalCost -= discount7DaysOrMore;
  } else if (days >= 3) {
    totalCost -= discount3DaysOrMore;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
