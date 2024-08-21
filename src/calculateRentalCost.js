/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  if (days >= longTerm) {
    return basePrice * days - longTermDiscount;
  }

  if (days >= shortTerm) {
    return basePrice * days - shortTermDiscount;
  }

  return basePrice * days;
}

module.exports = calculateRentalCost;
