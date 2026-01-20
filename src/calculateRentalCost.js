/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const shortTerm = 3;
  const longTerm = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days >= longTerm) {
    return days * basePrice - longTermDiscount;
  }

  if (days < longTerm && days >= shortTerm) {
    return days * basePrice - shortTermDiscount;
  }

  return days * basePrice;
}

module.exports = calculateRentalCost;
