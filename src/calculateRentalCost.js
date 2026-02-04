/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const totalCost = days * dailyRate;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const shortTerm = 3;

  if (days < shortTerm) {
    return totalCost;
  }

  if (days >= shortTerm && days < longTerm) {
    return totalCost - shortTermDiscount;
  }

  if (days >= longTerm) {
    return totalCost - longTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
