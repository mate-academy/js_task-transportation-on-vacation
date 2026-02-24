/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const middleTerm = 3;
  const costPerday = 40;
  const basePrice = costPerday * days;
  const longTermDiscount = 50;
  const middleTermDiscount = 20;

  if (days >= longTerm) {
    return basePrice - longTermDiscount;
  }

  if (days >= middleTerm) {
    return basePrice - middleTermDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
