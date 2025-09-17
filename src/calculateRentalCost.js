/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRent = 40;
  let totalCost = 0;

  if (days < 3) {
    totalCost = dailyRent * days;
  }

  if (days >= 3 && days < 7) {
    totalCost = dailyRent * days - 20;
  }

  if (days >= 7) {
    totalCost = dailyRent * days - 50;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
