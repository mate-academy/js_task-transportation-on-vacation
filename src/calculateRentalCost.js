/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let costDay = 40;
  let totalCost = costDay * days;

  if (days >= 7) {
    totalCost -= 50;
  }

  if (days >= 3 && days <= 6) {
    totalCost -= 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
