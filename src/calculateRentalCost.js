/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRate = 40;
  const basicDiscount = 20;
  const extendedDiscount = 50;

  const totalCost = days * dailyRate;

  if (days >= 7) {
    return totalCost - extendedDiscount;
  } else if (days >= 3) {
    return totalCost - basicDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
