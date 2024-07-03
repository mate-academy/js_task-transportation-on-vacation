/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const costPerDay = 40;
  const shortTerm = 3;
  const longTerm = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days >= longTerm) {
    return costPerDay * days - longTermDiscount;
  }

  if (days >= shortTerm) {
    return costPerDay * days - shortTermDiscount;
  }

  return costPerDay * days;
}

module.exports = calculateRentalCost;
