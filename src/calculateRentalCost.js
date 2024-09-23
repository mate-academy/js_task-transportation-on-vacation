/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  let totalPrice = days * basePrice;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;
  const longTerm = 7;

  if (days >= shortTerm && days < longTerm) {
    totalPrice -= shortTermDiscount;
  }

  if (days >= longTerm) {
    totalPrice -= longTermDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
