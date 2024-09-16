/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const cost = 40 * days;
  const firstDiscount = 20;
  const secondDiscount = 50;

  if (days >= 7) {
    return cost - secondDiscount;
  }

  if (days >= 3) {
    return cost - firstDiscount;
  }

  return cost;
}

module.exports = calculateRentalCost;
