/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const rentPrice = 40;

  if (days >= shortTerm && days < longTerm) {
    return days * rentPrice - shortTermDiscount;
  } else if (days >= longTerm) {
    return days * rentPrice - longTermDiscount;
  } else {
    return days * rentPrice;
  }
}

module.exports = calculateRentalCost;
