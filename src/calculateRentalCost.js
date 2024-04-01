/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const dailyRate = 40;
  const longTerm = 7;
  const lowTerm = 3;
  const longDiscaunt = 50;
  const lowDiscaunt = 20;

  const basePrice = dailyRate * days;

  if (days < lowTerm) {
    return basePrice;
  }

  if (days < longTerm) {
    return basePrice - lowDiscaunt;
  }

  return basePrice - longDiscaunt;
}

module.exports = calculateRentalCost;
