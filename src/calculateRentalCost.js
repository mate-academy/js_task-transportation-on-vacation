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
  const subtotal = basePrice * days;

  if (days < shortTerm) {
    return subtotal;
  } else if (days >= shortTerm && days < longTerm) {
    return subtotal - shortTermDiscount;
  } else if (days >= longTerm) {
    return subtotal - longTermDiscount;
  }
}

module.exports = calculateRentalCost;
