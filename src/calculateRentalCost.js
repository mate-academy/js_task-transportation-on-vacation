/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const shortTerm = 3;
  const longTerm = 7;
  const basePrice = 40;
  const minDiscount = 20;
  const maxDiscount = 50;
  const result = days * basePrice;

  if (days < shortTerm) {
    return result;
  }

  if (days >= shortTerm && days < longTerm) {
    return result - minDiscount;
  }

  if (days >= longTerm) {
    return result - maxDiscount;
  }
}

module.exports = calculateRentalCost;
