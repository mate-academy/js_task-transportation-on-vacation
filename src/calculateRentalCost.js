/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const sum = days * dayCost;
  const shortTerm = 3;
  const longTerm = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days >= longTerm) {
    return sum - longTermDiscount;
  }

  if (days >= shortTerm) {
    return sum - shortTermDiscount;
  }

  return sum;
}

module.exports = calculateRentalCost;
