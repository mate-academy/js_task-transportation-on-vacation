/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40 * days;

  if (days < 3) {
    return basePrice;
  }

  if (days < 7) {
    return basePrice - 20;
  }

  return basePrice - 50;
}

module.exports = calculateRentalCost;
