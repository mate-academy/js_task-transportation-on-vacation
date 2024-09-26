/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const basicRate = 40;
  const basePrice = basicRate * days;
  const largeDiscount = 50;
  const smallDiscount = 20;

  if (days >= 7) {
    return basePrice - largeDiscount;
  }

  if (days >= 3) {
    return basePrice - smallDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
