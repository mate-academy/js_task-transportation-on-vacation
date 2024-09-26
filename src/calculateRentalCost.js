/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const discountSmall = 20;
  const discountBig = 50;
  const totalCost = days * cost;

  if (days >= 7) {
    return totalCost - discountBig;
  }

  if (days >= 3 && days < 7) {
    return totalCost - discountSmall;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
