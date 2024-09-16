/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = days * 40;
  const smallDiscount = 20;
  const basicDiscount = 50;

  if (days >= 7) {
    return cost - basicDiscount;
  }

  if (days >= 3) {
    return cost - smallDiscount;
  }

  return cost;
}

module.exports = calculateRentalCost;
