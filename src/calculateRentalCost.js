/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyCost = 40;
  const cost = days * dailyCost;

  if (days < 3) {
    return cost;
  } else if (days >= 3 && days < 7) {
    return cost - 20;
  } else {
    return cost - 50;
  }
}

module.exports = calculateRentalCost;
