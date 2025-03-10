/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let totalCost = days * 40;

  if (days >= 7) {
    totalCost -= 50;
  }

  if (days >= 3 && days < 7) {
    totalCost -= 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
