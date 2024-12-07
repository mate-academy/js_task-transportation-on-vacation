/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentalCostWithOutDiscount = days * 40;
  const rentalCostWithBasicDiscount = days * 40 - 20;
  const rentalCostWithPremiumDiscount = days * 40 - 50;

  if (days >= 3 && days < 7) {
    return rentalCostWithBasicDiscount;
  }

  if (days >= 7) {
    return rentalCostWithPremiumDiscount;
  }

  return rentalCostWithOutDiscount;
}

module.exports = calculateRentalCost;
