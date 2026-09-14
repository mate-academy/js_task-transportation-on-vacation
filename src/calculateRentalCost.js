/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortTerm = 3;
  const longTerm = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;
  const baseRate = 40;

  if (days < shortTerm) {
    return days * baseRate;
  }

  if (days < longTerm) {
    return days * baseRate - shortTermDiscount;
  }

  return days * baseRate - longTermDiscount;
}

module.exports = calculateRentalCost;
