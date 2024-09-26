/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discountSmall = 20;
  const discountBig = 50;
  const dailyRentalCost = 40;
  const normalCost = days * dailyRentalCost;

  if (days >= 7) {
    return normalCost - discountBig;
  }

  if (days >= 3) {
    return normalCost - discountSmall;
  }

  return normalCost;
}

module.exports = calculateRentalCost;
