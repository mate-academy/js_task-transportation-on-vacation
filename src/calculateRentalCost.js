/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const total = 40 * days;
  const basicDiscount = 20;
  const premiumDiscount = 50;

  if (days >= 7) {
    return total - premiumDiscount;
  }

  if (days >= 3) {
    return total - basicDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
