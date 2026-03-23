/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRate = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const totalCost = days * dailyRate;

  if (days >= longTerm) {
    return totalCost - longTermDiscount;
  }

  if (days >= shortTerm) {
    return totalCost - shortTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
