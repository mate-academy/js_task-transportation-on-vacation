/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const basicTerm = 3;
  const basicDiscount = 20;
  const longTerm = 7;
  const longDiscount = 50;

  if (days < basicTerm) {
    return days * basePrice;
  }

  if (days >= basicTerm && days < longTerm) {
    return days * basePrice - basicDiscount;
  }

  if (days >= longTerm) {
    return days * basePrice - longDiscount;
  }
}

module.exports = calculateRentalCost;
