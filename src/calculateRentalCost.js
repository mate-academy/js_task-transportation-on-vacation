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

  if (days >= longTerm) {
    return days * dayCost - longTermDiscount;
  }

  if (days >= shortTerm && days < longTerm) {
    return days * dayCost - shortTermDiscount;
  }

  return days * dayCost;
}

module.exports = calculateRentalCost;
