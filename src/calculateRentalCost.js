/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  let totalSum = dailyCost * days;

  if (days >= 7) {
    totalSum -= 50;
  } else if (days >= 3) {
    totalSum -= 20;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
