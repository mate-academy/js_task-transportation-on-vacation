/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const price = 40;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  let totalAmount = 0;

  if (days >= shortTerm && days < longTerm) {
    totalAmount = days * price - shortTermDiscount;
  } else if (days >= 7) {
    totalAmount = days * price - longTermDiscount;
  } else {
    totalAmount = days * price;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
