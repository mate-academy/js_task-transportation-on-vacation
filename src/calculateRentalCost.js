/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCost = 40;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (days >= longTerm) {
    return baseCost * days - longTermDiscount;
  }

  if (days >= shortTerm) {
    return baseCost * days - shortTermDiscount;
  }

  return baseCost * days;
}

module.exports = calculateRentalCost;
