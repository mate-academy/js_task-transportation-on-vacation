/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = days * 40;

  if (days >= 7) {
    return basePrice - 50;
  }

  if (days >= 3) {
    return basePrice - 20;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
