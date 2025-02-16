/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const cost = 40 * days;
  const saleSmall = 20;
  const saleBig = 50;

  if (days > 6) {
    return cost - saleBig;
  }

  if (days > 2) {
    return cost - saleSmall;
  }

  return cost;
}

module.exports = calculateRentalCost;
