/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dayCost = 40;
  const fullPrice = dayCost * days;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  if (days >= longTerm) {
    return fullPrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return fullPrice - shortTermDiscount;
  }

  return fullPrice;
}

module.exports = calculateRentalCost;
