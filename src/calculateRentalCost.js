/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRate = 40;
  const totalCost = days * dailyRate;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (days < shortTerm) {
    return totalCost;
  }

  if (days < longTerm) {
    return totalCost - shortTermDiscount;
  }

  return totalCost - longTermDiscount;
}

module.exports = calculateRentalCost;
