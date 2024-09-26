/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const defaultCostPerDay = 40;
  const discountSevenMoreDays = 50;
  const discountThreeMoreDays = 20;

  let cost = days * defaultCostPerDay;

  if (days >= 7) {
    cost -= discountSevenMoreDays;
  } else if (days >= 3) {
    cost -= discountThreeMoreDays;
  }

  return cost;
}

module.exports = calculateRentalCost;
