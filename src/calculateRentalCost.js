/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const price = 40;
  const total = days * price;
  const shortTerm = 3;
  const longTerm = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days >= longTerm) {
    return total - longTermDiscount;
  }

  if (days >= shortTerm) {
    return total - shortTermDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
