/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = days * 40;
  const mediumTerm = 3;
  const longTerm = 7;
  const mediumTermDiscount = 20;
  const longTermDiscount = 50;

  if (days < mediumTerm) {
    return basePrice;
  }

  if (days >= mediumTerm && days < longTerm) {
    return basePrice - mediumTermDiscount;
  }

  if (days >= longTerm) {
    return basePrice - longTermDiscount;
  }
}
module.exports = calculateRentalCost;
