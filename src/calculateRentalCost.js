/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortTerm = 3;
  const longTerm = 7;
  const dailyCost = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;
  const rentCost = days * dailyCost;

  if (days >= longTerm) {
    return rentCost - longTermDiscount;
  }

  if (days >= shortTerm) {
    return rentCost - shortTermDiscount; // write code here
  }

  return rentCost;
}

module.exports = calculateRentalCost;
