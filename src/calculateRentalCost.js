/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCostPerDay = 40;
  const rentalCostPerPeriod = days * rentalCostPerDay;
  const basicDiscount = 20;
  const premiumDiscount = 50;

  if (days === 0) {
    return 0;
  } else if (days < 3) {
    return rentalCostPerPeriod;
  } else if (days > 2 && days < 7) {
    return rentalCostPerPeriod - basicDiscount;
  }

  return rentalCostPerPeriod - premiumDiscount;
}

module.exports = calculateRentalCost;
