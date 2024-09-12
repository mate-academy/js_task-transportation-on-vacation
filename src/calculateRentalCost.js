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

  let totalCost = days * dailyRate;

  if (days >= longTerm) {
    totalCost -= longDiscaunt;
  } else if (days >= lowTerm) {
    totalCost -= lowDiscaunt;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
