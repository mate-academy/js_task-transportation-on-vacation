/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const perDay = 40;
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const total = days * perDay;

  if (days < shortTerm) {
    return total;
  }

  if (days >= shortTerm && days < longTerm) {
    return total - shortTermDiscount;
  }

  return total - longTermDiscount;
}

module.exports = calculateRentalCost;
