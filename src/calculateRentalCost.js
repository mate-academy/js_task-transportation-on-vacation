/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  let totalCost = days * dayCost;

  if (days >= longTerm) {
    totalCost -= longTermDiscount;
  }

  if (days >= shortTerm && days < longTerm) {
    totalCost -= shortTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
