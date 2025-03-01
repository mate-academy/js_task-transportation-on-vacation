/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const pricePerDay = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  let totalAmount = 0;

  if (days < shortTerm) {
    totalAmount = days * pricePerDay;

    return totalAmount;
  }

  if (days >= shortTerm && days < longTerm) {
    totalAmount = days * pricePerDay - shortTermDiscount;

    return totalAmount;
  }

  totalAmount = days * pricePerDay - longTermDiscount;

  return totalAmount;
}

module.exports = calculateRentalCost;
