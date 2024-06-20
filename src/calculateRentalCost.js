/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const value = 40;
  const minimumDiscount = 20;
  const maximumDiscount = 50;
  const basePrice = days * value;

  if (days <= 2) {
    return basePrice;
  } else if (days >= 3 && days <= 6) {
    return basePrice - minimumDiscount;
  } else if (days >= 7) {
    return basePrice - maximumDiscount;
  }
}

module.exports = calculateRentalCost;
