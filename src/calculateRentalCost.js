/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const baseCost = 40;
  const cost = baseCost * days;
  const baseDiscount = 20;
  const additionalDiscount = 50;
  let endCost = cost;

  if (days >= 3 && days <= 6) {
    endCost = cost - baseDiscount;
  }

  if (days >= 7) {
    endCost = cost - additionalDiscount;
  }

  return endCost;
}

module.exports = calculateRentalCost;
