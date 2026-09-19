/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const baseCost = 40;
  const cost = baseCost * days;
  let endCost = cost;

  if (days >= 3 && days <= 6) {
    endCost = cost - 20;
  }

  if (days >= 7) {
    endCost = cost - 50;
  }

  return endCost;
}

module.exports = calculateRentalCost;
