/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentalPrice = 40;
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const basicPrice = rentalPrice * days;

  if (days >= longTerm) {
    return basicPrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return basicPrice - shortTermDiscount;
  }

  return basicPrice;
}

module.exports = calculateRentalCost;
