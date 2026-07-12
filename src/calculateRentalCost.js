/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const dayCost = 40;

  const basePrice = days * dayCost;

  if (days < shortTerm) {
    return basePrice;
  }

  if (days >= longTerm) {
    return basePrice - longTermDiscount;
  }

  return basePrice - shortTermDiscount;
}

module.exports = calculateRentalCost;
