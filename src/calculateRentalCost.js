/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;

  if (days >= 7) {
    return basePrice * days - 50;
  }

  if (days >= 3) {
    return basePrice * days - 20;
  }

  return basePrice * days;
}

module.exports = calculateRentalCost;
