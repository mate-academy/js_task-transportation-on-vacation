/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const shortTerm = 3;
  const longTerm = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  const totalCost = basePrice * days;

  if (days >= longTerm) {
    return totalCost - longTermDiscount;
  }

  if (days >= shortTerm) {
    return totalCost - shortTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
