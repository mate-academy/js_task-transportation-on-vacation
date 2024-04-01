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

  if (days < lowTerm) {
    return dailyRate * days;
  }

  if (days < longTerm) {
    return dailyRate * days - lowDiscaunt;
  }

  return dailyRate * days - longDiscaunt;
}

module.exports = calculateRentalCost;
