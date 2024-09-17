/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortTermDiscount = 20;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const longTerm = 7;
  const carRentCost = 40;

  if (days < shortTerm) {
    return days * carRentCost;
  }

  if (days >= shortTerm && days < longTerm) {
    return days * carRentCost - shortTermDiscount;
  }

  if (days >= longTerm) {
    return days * carRentCost - longTermDiscount;
  }
}

module.exports = calculateRentalCost;
