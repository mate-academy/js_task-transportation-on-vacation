/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costDayCar = 40;
  const shortTerm = 3;
  const longTerm = 7;
  const lessWeeklyDiscount = 20;
  const weeklyDiscount = 50;

  const totalCost = costDayCar * days;

  if (days >= longTerm) {
    return totalCost - weeklyDiscount;
  }

  if (days >= shortTerm) {
    return totalCost - lessWeeklyDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
