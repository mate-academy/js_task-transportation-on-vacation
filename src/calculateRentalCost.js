/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const amount = days * 40;
  const baseDiscount = 20;
  const proDiscount = 50;

  if (days >= 7) {
    return amount - proDiscount;
  }

  if (days >= 3) {
    return amount - baseDiscount;
  }

  return amount;
}

module.exports = calculateRentalCost;
