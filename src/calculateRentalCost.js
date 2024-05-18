/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const mediumTermDiscount = 20;
  const costPerDay = 40;
  const basePrice = costPerDay * days;

  if (days >= longTerm) {
    return basePrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return basePrice - mediumTermDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
