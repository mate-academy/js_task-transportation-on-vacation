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
  const result = days * pricePerDay;

  if (days >= longTerm) {
    return result - longTermDiscount;
  }

  if (days >= shortTerm) {
    return result - shortTermDiscount;
  }

  return result;
}

module.exports = calculateRentalCost;
