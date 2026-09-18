/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRentalCost = 40;
  const smallDiscount = 20;
  const largeDiscount = 50;
  const totalValue = days * dayRentalCost;

  if (days >= 7) {
    return totalValue - largeDiscount;
  }

  if (days >= 3) {
    return totalValue - smallDiscount;
  }

  return totalValue;
}

module.exports = calculateRentalCost;
