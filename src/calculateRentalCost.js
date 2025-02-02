/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const basePrice = 40 * days;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (days < shortTerm) {
    return basePrice;
  }

  if (days < longTerm) {
    return basePrice - shortTermDiscount;
  }

  return basePrice - longTermDiscount;
}

module.exports = calculateRentalCost;
