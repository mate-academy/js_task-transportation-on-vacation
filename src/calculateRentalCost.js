/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const cost = 40;

  const longTerm = 7;
  const shortTerm = 3;

  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  const total = days * cost;

  if (days >= longTerm) {
    return total - longTermDiscount;
  } else if (days >= shortTerm) {
    return total - shortTermDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
