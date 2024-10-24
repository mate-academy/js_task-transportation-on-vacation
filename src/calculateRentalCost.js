/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = days * 40;
  const mediumTermTime = 3;
  const mediumTermDiscount = 20;
  const longTermTime = 7;
  const longTermDiscount = 50;

  if (days < mediumTermTime) {
    return basePrice;
  } else if (days >= mediumTermTime && days < longTermTime) {
    return basePrice - mediumTermDiscount;
  }

  return basePrice - longTermDiscount;
}

module.exports = calculateRentalCost;
