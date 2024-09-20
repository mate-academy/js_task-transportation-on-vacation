/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = days * 40;
  const shortTerm = 3;
  const longTerm = 7;
  const shortDiscount = 20;
  const longDiscount = 50;

  if (days >= shortTerm && days < longTerm) {
    return basePrice - shortDiscount;
  }

  if (days >= longTerm) {
    return basePrice - longDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
