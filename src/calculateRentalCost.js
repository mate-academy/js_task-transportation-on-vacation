/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  if (days < shortTerm) {
    return days * basePrice;
  }

  if (days >= shortTerm && days < longTerm) {
    return days * basePrice - shortTermDiscount;
  }

  return days * basePrice - longTermDiscount;
}

module.exports = calculateRentalCost;
