/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const price = 40;
  const cost = price * days;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= 7) {
    return cost - bigDiscount;
  }

  if (days >= 3) {
    return cost - smallDiscount;
  }

  return cost;
}

module.exports = calculateRentalCost;
