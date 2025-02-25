/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCost = 40 * days;

  if (days >= 3 && days < 7) {
    totalCost -= 20;
  }

  if (days >= 7) {
    totalCost -= 50;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
