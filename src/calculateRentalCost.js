/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const price = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  const startPrice = price * days;

  if (days >= longTerm) {
    return startPrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return startPrice - shortTermDiscount;
  }

  return startPrice;
}

module.exports = calculateRentalCost;
