/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const totalCost = days * rentPrice;
  const shortTerm = 3;
  const longTerm = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days >= shortTerm && days < longTerm) {
    return totalCost - shortTermDiscount;
  }

  if (days >= longTerm) {
    return totalCost - longTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
