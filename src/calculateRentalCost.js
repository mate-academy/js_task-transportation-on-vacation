/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;

  const shortTerm = 3;
  const shortTermDiscount = 20;

  const longTerm = 7;
  const longTermDiscount = 50;

  const total = dayCost * days;

  if (days >= longTerm) {
    return total - longTermDiscount;
  }

  if (days >= shortTerm) {
    return total - shortTermDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
