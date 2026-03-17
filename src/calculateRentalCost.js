/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = days * 40;

  if (days > 6) {
    return basePrice - 50;
  }

  if (days > 2 && days < 7) {
    return basePrice - 20;
  } else {
    return basePrice;
  }
  // write code here
}

module.exports = calculateRentalCost;
