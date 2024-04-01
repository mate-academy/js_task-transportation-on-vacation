/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const basicDiscount = 20;
  const additionalDiscount = 50;
  const longTerm = 7;
  const shortTerm = 3;
  const totalCost = days * dailyRate;

  if (days >= longTerm) {
    return totalCost - additionalDiscount;
  }
  if (days >= shortTerm && days < longTerm) {
    return totalCost - basicDiscount;
  }
    return totalCost;
  }

module.exports = calculateRentalCost;
