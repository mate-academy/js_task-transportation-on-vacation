/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const basePrice = 40;

  if (days >= longTerm) {
    return longTerm * basePrice - longTermDiscount;
  }

  if (days >= shortTerm && days < longTerm) {
    return days * basePrice - shortTermDiscount;
  }

  return days * basePrice;
}

module.exports = calculateRentalCost;
