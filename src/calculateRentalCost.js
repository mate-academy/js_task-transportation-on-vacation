/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const threeMoreDays = 20;
  const sevenMoreDays = 50;
  let totalCost = rentCost;

  if (days) {
    totalCost = rentCost * days;
  }

  if (days >= 3 && days < 7) {
    totalCost -= threeMoreDays;
  } else if (days >= 7) {
    totalCost -= sevenMoreDays;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
