/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyCost = 40;
  const cost = days * dailyCost;

  if (days >= 7) {
    return ((cost) - 50);
  }

  if (days >= 3) {
    return ((cost) - 20);
  }

  return (cost);
}

module.exports = calculateRentalCost;
