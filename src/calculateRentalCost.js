/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;

  const shortTerm = 3;
  const shortTermDiscount = 20;

  const longTerm = 7;
  const longTermDiscount = 50;

  const total = basePrice * days;

  if (days >= longTerm) {
    return total - longTermDiscount;
  }

  if (days >= shortTerm) {
    return total - shortTermDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
