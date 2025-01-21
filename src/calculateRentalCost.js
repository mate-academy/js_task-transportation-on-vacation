/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  let totalDiscount = 0;

  if (days >= 3) {
    totalDiscount = 20;
  }

  if (days >= 7) {
    totalDiscount = 50;
  }

  const totalAmount = rentCost * days - totalDiscount;

  return totalAmount;
}

module.exports = calculateRentalCost;
