/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const defaultRentalPrice = 40;
  const longTerm = 7;
  const shortTerm = 3;

  const basePrice = days * defaultRentalPrice;

  if (days >= longTerm) {
    return basePrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return basePrice - shortTermDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
